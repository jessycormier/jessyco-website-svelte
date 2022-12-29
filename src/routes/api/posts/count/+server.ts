import { json } from '@sveltejs/kit';

// export const prerender = true;

export const GET = () => {
	const posts = import.meta.glob(`$lib/content/posts/*.md`);

	return json(Object.keys(posts).length);
};
