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

	const itemTemplate = ({ loc = '', lastMod = undefined, changeFreq = 'monthly', priority = '0.5' } = {}) => {
		let template = '<url>';

		if (loc) {
			template += `<loc>${loc}</loc>`;
		}

		if (lastMod) {
			template += `<lastmod>${lastMod}</lastmod>`;
		}

		if (changeFreq) {
			template += `<changefreq>${changeFreq}</changefreq>`;
		}

		if (priority) {
			template += `<priority>${priority}</priority>`;
		}

		template += `</url>`;
		return template;
	};

	const render = (posts: PostMeta[]) =>
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">` +
		itemTemplate({ loc: siteLink }) +
		posts
			.map((p) =>
				itemTemplate({
					loc: `${siteLink}/posts/${p.slug}`
				})
			)
			.join('') +
		`</urlset>`;

	return new Response(render(data), {
		headers: {
			'Cache-Control': `max-age=0, s-max-age=${600}`,
			'Content-Type': 'application/xml'
		}
	});
}) satisfies RequestHandler;
