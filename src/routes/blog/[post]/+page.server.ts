import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const post = await import(`../../../lib/content/posts/${params.post}.md`);

		return {
			PostContent: post.default.render().html,
			meta: { ...post.metadata, slug: params.post }
		};
	} catch (err) {
		throw error(404, err as App.Error);
	}
}) satisfies PageServerLoad;
