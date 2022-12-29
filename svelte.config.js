import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// import rehypeSlug from 'rehype-slug'

// For building on vercel: https://github.com/Automattic/node-canvas/issues/1779
if (
	process.env.LD_LIBRARY_PATH == null ||
	!process.env.LD_LIBRARY_PATH.includes(
	  `${process.env.PWD}/node_modules/canvas/build/Release:`,
	)
  ) {
	process.env.LD_LIBRARY_PATH = `${
	  process.env.PWD
	}/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
  }


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md']
			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			// rehypePlugins: [
			// 	rehypeSlug,
			// 	rehypeAutolinkHeadings,
			// ],
		}),
		preprocess({
			scss: true,
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		prerender: {
			entries: [
				// '*',
				// '/api/posts/page/*',
				// '/blog/category/*/page/',
				// '/blog/category/*/page/*',
				// '/blog/category/page/',
				// '/blog/category/page/*',
				// '/blog/page/',
				// '/blog/page/*'
			]
		}
	}
};

export default config;
