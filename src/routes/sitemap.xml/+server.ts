import { siteDescription, siteLink, siteTitle } from '$lib/config';
import type { PostMeta } from '$lib/interfaces/post-meta.interface';
import type { RequestHandler } from '../sitemap.xml/$types';

export const prerender = true;

export const GET = (async () => {
	const data = await Promise.all(
		Object.entries(import.meta.glob('/src/content/*.md')).map(async (a) => {
			const path = a[0];
			const page = a[1];
			const { metadata } = (await page()) as { metadata: PostMeta };
			const slug = path?.split('/')?.pop()?.slice(0, -3);
			return { ...metadata, slug };
		})
	).then((postData) => {
		return postData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	});

	const render = (posts: PostMeta[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${siteLink}/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  <title>${siteTitle}</title>
  <description>${siteDescription}</description>
  <link>>${siteLink}/</link>
  <atom:link href="${siteLink}/rss.xml" rel="self" type="application/rss+xml" />
  ${posts.map(p => `
  <url>
    <loc>${siteLink}/blog/${p.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`).join('')}
</urlset>`;


	const body = render(data);

	return new Response(body, {
		headers: {
			'Cache-Control': `max-age=0, s-max-age=${600}`,
			'Content-Type': 'application/xml'
		}
	});
}) satisfies RequestHandler;
