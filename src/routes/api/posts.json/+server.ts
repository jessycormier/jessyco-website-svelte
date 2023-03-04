import fetchPostsMeta from '$lib/fetchPosts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	
	const { posts: postsMeta } = await fetchPostsMeta();
	
	return json(postsMeta);
};
