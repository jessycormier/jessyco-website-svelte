// import adapter from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

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
			mode: 'auto'
		},
	}
};

export default config;
