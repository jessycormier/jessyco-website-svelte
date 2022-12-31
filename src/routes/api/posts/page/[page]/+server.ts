import fetchPosts from '$lib/fetchPosts';
import { postsPerPage } from '$lib/config';
import { json } from '@sveltejs/kit';

export const prerender = 'auto';

export const GET = async ({ params }: any) => {
	const { page } = params || 1;

	const options = {
		offset: (page - 1) * postsPerPage,
		limit: postsPerPage
	};

	const { posts } = await fetchPosts(options);

	return json(posts);
};
