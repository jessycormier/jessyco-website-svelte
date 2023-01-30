import { json } from '@sveltejs/kit';

export const GET = () => {
	/**
	 * I've attempted to use @content I've setup with vite for referenecing the
	 * markdown, but with meta.glob (comes from vite i think), it doesn't work.
	 * So this path is always going to be a ralative path. Also can't use vars
	 * or extract this out into some kind of config doesn't seem to work either.
	 */
	const posts = import.meta.glob(`/src/content/*.md`);

	return json(Object.keys(posts).length);
};
