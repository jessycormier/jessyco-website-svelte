import Trianglify from 'trianglify';
import type { RequestHandler } from './$types';

/**
 * @todo fix Trianglify definition as it's outdated.
 */
export const GET = (({ params }) => {
	try {
		const { seed, size } = params;
		const sizes = size.split('x');
		const width = Number(sizes[0]);
		const height = Number(sizes[1]);

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const pattern = (Trianglify({ width, height, seed }) as any)
			.toSVGTree({
				scaling: 'auto'
			})
			.toString();

		return new Response(pattern, {
			headers: {
				'Cache-Control': `public, max-age=2629000`,
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
