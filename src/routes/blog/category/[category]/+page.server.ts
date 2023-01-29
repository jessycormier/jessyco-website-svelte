import fetchPostsMeta from '$lib/fetchPosts';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async ({ params }) => {
	const { category } = params;
	const { posts: postsMeta } = await fetchPostsMeta({ category, limit: -1 });
	const total = postsMeta.length;
	return {
		posts: postsMeta,
		category,
		page: 1,
		total
	};
}) satisfies PageServerLoad;
