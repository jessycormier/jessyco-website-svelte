import { siteDescription, siteLink, siteTitle, siteURL } from '$lib/config';
import type { PostMeta } from '$lib/interfaces/post-meta.interface';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET = (async () => {
	const data = await Promise.all(
		// eslint-disable-next-line no-unused-vars
		Object.entries(import.meta.glob('/src/content/*.md')).map(async (a) => {
			const path = a[0];
			const page = a[1];
			const { metadata } = (await page()) as { metadata: PostMeta };
			const slug = path?.split('/')?.pop()?.slice(0, -3);
			return { ...metadata, slug };
		})
	).then((posts) => {
		return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	});

	const render = (posts: PostMeta[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteLink}</link>
<atom:link href="https://${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts.map(postTemplate).join('')}
</channel>
</rss>
`;

	const postTemplate = (post: PostMeta) => `<item>
<guid isPermaLink="true">https://${siteURL}/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://${siteURL}/blog/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`;

	const body = render(data);

	return new Response(body, {
		headers: {
			'Cache-Control': `max-age=0, s-max-age=${600}`,
			'Content-Type': 'application/xml'
		}
	});
}) satisfies RequestHandler;
