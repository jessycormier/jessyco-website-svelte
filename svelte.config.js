// import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

const rootDomain = process.env.VITE_DOMAIN; // or your server IP for dev

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx']
		}),
		preprocess({
			scss: true,
			postcss: true
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			'@content': '/src/content/*'
		},
		csp: {
			mode:"auto",
			directives: {
				'base-uri': ["'self'"],
				'child-src': ["'self'"],
				'connect-src': ["'self'", 'ws://localhost:*'],
				'img-src': ["'self'", 'data:'],
				'font-src': ["'self'", 'data:'],
				'form-action': ["'self'"],
				'frame-ancestors': ["'self'"],
				'frame-src': [
					"'self'",
					"*.youtube.com",
				],
				// 'manifest-src': ["'self'"],
				// 'media-src': ["'self'", 'data:'],
				// 'object-src': ["'none'"],
				'style-src': ["'self'", "'unsafe-inline'"],				
				'default-src': [
					'self',
					...(rootDomain ? [rootDomain, `ws://${rootDomain}`] : []),
				],
				'script-src': [
					'self',
					"nonce-363cb650-276b-5ec4-8ba9-983617dca07e",
					"*.vercel-insights.com",
					"vercel-analytics.com",
					"*.vercel-analytics.com"
				],
				// 'worker-src': ["'self'"],
				// remove report-to & report-uri if you do not want to use Sentry reporting
				// 'report-to': ["'csp-endpoint'"],
				// 'report-uri': [
				// 	`https://sentry.io/api/${process.env.VITE_SENTRY_PROJECT_ID}/security/?sentry_key=${process.env.VITE_SENTRY_KEY}`,
				// ],
				}
		},
	}
};

export default config;
