import Trianglify from 'trianglify';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET = (({ url }) => {
	const seed = url.searchParams.get('s');
	const width = Number(url.searchParams.get('w') ?? 80);
	const height = Number(url.searchParams.get('h') ?? 80);

	// casting as any to avoid issue with @type for the Trianglify lib.
	// @todo: fix @typedef lib and PR
	const pattern = (Trianglify({ width, height, seed }) as any)
		.toSVGTree({
			scaling: 'auto'
		})
		.toString();

	return new Response(pattern, {
		headers: {
			// 'Cache-Control': `max-age=0, s-max-age=${0}`,
			'Content-Type': 'image/svg+xml'
		}
	});
}) satisfies RequestHandler;
