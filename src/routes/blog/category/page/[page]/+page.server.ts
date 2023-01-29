import { postsPerPage } from '$lib/config';
import fetchPostsMeta from '$lib/fetchPosts';
import { redirectWhenNoPages } from '$lib/functions/redirect-when-no-pages.function';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load = (async ({ fetch, params }) => {
	const pageNumber = parseInt(params.page) || 1;

	redirectWhenNoPages(pageNumber, '/blog');

	const offset = pageNumber * postsPerPage - postsPerPage;
	const totalPostsRes = await fetch('/api/posts/count');
	const total = await totalPostsRes.json();
	const { posts: postsMeta } = await fetchPostsMeta({ offset });

	return {
		posts: postsMeta,
		page: pageNumber,
		totalPosts: total
	};
}) satisfies PageServerLoad;
