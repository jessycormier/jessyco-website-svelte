import type { PostMeta } from '$lib/interfaces/post-meta.interface';
import type { PageServerLoad } from './$types';

export const load = (async ({ url, fetch }) => {
	const postRes = await fetch(`${url.origin}/api/posts.json`);
	const totalRes = await fetch(`${url.origin}/api/posts/count`);

	const posts: PostMeta[] = (await postRes.json()) || [];
	const total: number = (await totalRes.json()) || 0;

	return {
		posts: posts.splice(0, 5),
		total: total
	};
	
}) satisfies PageServerLoad;
