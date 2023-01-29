import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load = (async () => {
	throw redirect(301, `/blog/category`);
}) satisfies PageServerLoad;
