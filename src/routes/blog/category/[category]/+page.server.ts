import fetchPostsMeta from '$lib/fetchPosts';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const { category, page = 1 } = params;
	const { posts: postsMeta } = await fetchPostsMeta({ category, limit: -1 });
	const total = postsMeta.length;
	return {
		posts: postsMeta,
		category,
		page,
		total
	};
}) satisfies PageServerLoad;
