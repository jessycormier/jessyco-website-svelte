import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/fetchPosts';
import { redirect } from '@sveltejs/kit';

export const load = async ({ url, params, fetch }: any) => {
	const page = parseInt(params.page) || 1;
	const { category } = params;

	// Prevents duplication of page 1 as the index page
	if (page <= 1) {
		throw redirect(301, `/blog/category/${category}`);
	}

	let offset = page * postsPerPage - postsPerPage;

	const totalPostsRes = await fetch(`${url.origin}/api/posts/count`);
	const total = await totalPostsRes.json();
	const { posts } = await fetchPosts({ offset, page } as any);

	return {
		posts,
		page,
		category,
		totalPosts: total
	};
};
