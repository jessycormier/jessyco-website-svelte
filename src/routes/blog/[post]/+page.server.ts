import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { navItems, siteLink, siteTitle } from '$lib/config';

export const ssr = true;
export const load = (async ({ params }) => {
	try {
		const postContent = await import(`../../../content/${params.post}.md`);

		return {
			post: {
				...postContent.metadata,
				content: postContent.default.render().html
				// slug: params.post
			},
			meta: {
				title: postContent.metadata.title ? `${postContent.metadata.title} - ${siteTitle}` : siteTitle,
				description: postContent.metadata.excerpt
			}
		};
	} catch (err) {
		throw error(404, err as App.Error);
	}
}) satisfies PageServerLoad;
