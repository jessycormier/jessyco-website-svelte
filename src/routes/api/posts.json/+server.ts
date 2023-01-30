import { postsPerPage } from '$lib/config';
import fetchPostsMeta from '$lib/fetchPosts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	
	const options = {
		limit: postsPerPage
	};

	const { posts: postsMeta } = await fetchPostsMeta(options);
	
	return json(postsMeta);
};
