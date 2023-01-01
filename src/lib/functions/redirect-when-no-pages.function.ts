import { redirect } from '@sveltejs/kit';

export const redirectWhenNoPages = (count: number, routePath: string) => {
	if (count <= 1) {
		throw redirect(301, routePath);
	}
};
