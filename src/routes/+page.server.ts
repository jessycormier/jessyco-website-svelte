export const load = async ({ url, fetch }: any) => {
	const postRes = await fetch(`${url.origin}/api/posts.json`);
	const totalRes = await fetch(`${url.origin}/api/posts/count`);

	const posts: any[] = await postRes.json() || [];
	const total: number = await totalRes.json() || 0;

	return { posts: posts.splice(0,3), total };
}