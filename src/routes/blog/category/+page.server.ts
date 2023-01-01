import type { PageServerLoad } from './$types';

const sortByTitle = (a: { title: string }, b: { title: string }) => {
	return a?.title > b?.title ? -1 : 1;
};

interface Post {
	categories: string[];
}

export const load = (async ({ url, fetch }) => {
	
	const res = await fetch(`${url.origin}/api/posts.json`);
	const posts = await res.json();

	const uniqueCategories: {
		[key: string]: {
			count: number;
			title: string;
		};
	} = {};

	posts.forEach((post: Post) => {
		post.categories.forEach((category) => {
			// eslint-disable-next-line no-prototype-builtins
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

	const sortedUniqueCategories = Object.values(uniqueCategories).sort(sortByTitle);

	return {
		uniqueCategories: sortedUniqueCategories
	};
}) satisfies PageServerLoad;
