// Vite
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

//CSS
import UnoCSS from 'unocss/vite';
import { presetTagify, presetIcons, extractorSvelte } from 'unocss';
import TailwindCSS from 'tailwindcss';
import tailwindConfig from './tailwind.config';
//import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano';

export default defineConfig({
	build: {
		sourcemap: false,
		rollupOptions: {
			cache: false
		}
	},
	css: {
		postcss: {
			plugins: [
				TailwindCSS(tailwindConfig),
				// autoprefixer(),
				...(process.env.NODE_ENV === 'production'
					? [
							cssnano({
								preset: ['default', { discardComments: { removeAll: true } }]
							})
					  ]
					: [])
			]
		}
	},
	plugins: [
		UnoCSS({
			include: [/\.svelte$/, /\.md?$/, /\.ts$/],
			extractors: [extractorSvelte],
			presets: [
				presetTagify({
					extraProperties: (matched: string) =>
						matched.startsWith('i-') ? { display: 'inline-block' } : {}
				}),
				presetIcons({ scale: 1.5 })
			]
		}),
		imagetools(),
		sveltekit(),
  ],
	// test: {
	// 	include: ['src/**/*.{test,spec}.{js,ts}']
	// }
});
