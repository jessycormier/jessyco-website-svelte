import { postsPerPage } from '$lib/config';
import fetchPostsMeta from '$lib/fetchPosts';
import { redirectWhenNoPages } from '$lib/functions/redirect-when-no-pages.function';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async ({ url, params, fetch }) => {
	const { category, page } = params;
	const pageNumber = parseInt(page) || 1;

	redirectWhenNoPages(pageNumber, `/blog/category/${category}`);

	const offset = pageNumber * postsPerPage - postsPerPage;
	const totalPostsRes = await fetch(`${url.origin}/api/posts/count`);
	const total = await totalPostsRes.json();
	const { posts: postsMetas } = await fetchPostsMeta({ offset });

	return {
		posts: postsMetas,
		page: pageNumber,
		category,
		totalPosts: total
	};
}) satisfies PageServerLoad;
