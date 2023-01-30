import trianglify from 'trianglify';
import type { RequestHandler } from './$types';

export const GET = (({ params }) => {
	try {
		const { seed, size } = params;
		const sizes = size?.split('x');
		const width = Number(sizes[0]) || 80;
		const height = Number(sizes[1]) || 80;

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const pattern = (trianglify({ width, height, seed }) as any)
			.toSVGTree({
				scaling: 'auto'
			})
			.toString();

		return new Response(pattern, {
			headers: {
				'Cache-Control': `public, max-age=2629000, s-max-age=2629000`,
				'Content-Type': 'image/svg+xml'
			}
		});
	} catch (error) {
		console.error(error);
		return new Response(undefined, {
			status: 500,
			statusText: "Couldn't resolve parameters"
		});
	}
}) satisfies RequestHandler;
