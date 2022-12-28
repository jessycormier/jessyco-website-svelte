import { error } from '@sveltejs/kit';

export const load = async ({ params }: any) => {
	try {
		const post = await import(`../../../lib/content/posts/${params.post}.md`);

		return {
			PostContent: post.default.render().html,
			meta: { ...post.metadata, slug: params.post }
		};
	} catch (err) {
		throw error(404, err as any);
	}
};
