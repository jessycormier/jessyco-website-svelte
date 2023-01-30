import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = 'auto';
export const csr = true;
// export const ssr = true;

export const load = (async ({ url }) => {
	try {
		return {
			path: url.pathname
		};
	} catch (err) {
		throw error(500, err as App.Error);
	}
}) satisfies PageServerLoad;
