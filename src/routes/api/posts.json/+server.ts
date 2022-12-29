import fetchPosts from '$lib/fetchPosts';
import { postsPerPage } from '$lib/config';
import { json } from '@sveltejs/kit';

// export const prerender = true;

export const GET = async () => {
	const options = {
		limit: postsPerPage
	};

	const { posts } = await fetchPosts(options);
	return json(posts);
};
