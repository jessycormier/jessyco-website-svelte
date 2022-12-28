export const load = async ({ url, fetch }: any) => {
	const res = await fetch(`${url.origin}/api/posts.json`);
	let posts = await res.json();

	let uniqueCategories = {} as any;

	posts.forEach((post: any) => {
		post.categories.forEach((category: any) => {
			if (uniqueCategories.hasOwnProperty(category)) {
				uniqueCategories[category].count += 1;
			} else {
				uniqueCategories[category] = {
					title: category,
					count: 1
				};
			}
		});
	});

	const sortedUniqueCategories = Object.values(uniqueCategories).sort((a: any, b: any) => a.title as any> b.title as any);

	return {
		uniqueCategories: sortedUniqueCategories
	};
};
