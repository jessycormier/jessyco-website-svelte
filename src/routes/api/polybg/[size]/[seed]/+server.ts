import Trianglify from 'trianglify';
import type { RequestHandler } from './$types';

export const prerender = 'auto';

export const GET = (({ params }) => {
	try {
		const { seed, size } = params;
		const sizes = size.split('x');
		const width = Number(sizes[0]);
		const height = Number(sizes[1]);

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
	} catch (error) {
		return new Response(undefined, {
			status: 500,
			statusText: "Couldn't resolve parameters"
		});
	}
}) satisfies RequestHandler;
