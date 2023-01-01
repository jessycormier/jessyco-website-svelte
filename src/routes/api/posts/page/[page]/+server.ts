import { postsPerPage } from '$lib/config';
import fetchPostsMeta from '$lib/fetchPosts';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = 'auto';

export const GET = (async ({ params }) => {
	const page = Number(params.page) || 1;

	const options = {
		offset: (page - 1) * postsPerPage,
		limit: postsPerPage
	};

	const { posts: postsMeta } = await fetchPostsMeta(options);

	return json(postsMeta);
}) satisfies RequestHandler;
