import fetchPosts from '$lib/fetchPosts';

export const load = async ({ params }: any) => {
	const category = params.category;
	const page = params.page || 1;
	const options = { category, limit: -1 };
	const { posts } = await fetchPosts(options);

	return {
		posts,
		category,
		page,
		total: posts.length
	};
};
