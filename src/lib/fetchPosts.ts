import type { PostMeta } from './interfaces/post-meta.interface';

const fetchPostsMeta = async ({ offset = 0, category = '' } = {}) => {
	
	const posts: PostMeta[] = await Promise.all(
		Object.entries(import.meta.glob('/src/content/*.md')).map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: PostMeta };
			const slug = path?.split('/')?.pop()?.slice(0, -3);

			return { ...metadata, slug };
		})
	);

	let sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	if (category) {
		sortedPosts = sortedPosts.filter((post) => post.categories.includes(category));
	}

	if (offset) {
		sortedPosts = sortedPosts.slice(offset);
	}

	sortedPosts = sortedPosts.map((post) => ({
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		date: post.date,
		categories: post.categories
	}));

	return {
		posts: sortedPosts
	};
};

export default fetchPostsMeta;
