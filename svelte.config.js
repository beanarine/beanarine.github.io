// svelte adapter
import adapterVercel from '@sveltejs/adapter-vercel';
import adapterNetlify from '@sveltejs/adapter-netlify';
import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

//markdown
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()],

	kit: {
		adapter: Object.keys(process.env).some((key) => key === 'VERCEL')
			? adapterVercel()
			: Object.keys(process.env).some((key) => key === 'NETLIFY')
			? adapterNetlify({ edge: true })
			: adapterStatic({
					pages: 'build',
					assets: 'build',
					fallback: undefined
			  }),
		prerender: {
			handleMissingId: 'warn'
		},
		csp: { mode: 'auto' }
	}
};

export default config;
