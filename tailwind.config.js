import { theme } from './src/lib/config/general';

import typography from '@tailwindcss/typography';

import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,md,js,svelte,ts}'],
	theme: { extend: {} },
	plugins: [typography, daisyui],
	daisyui: { themes: theme.map(({ name }) => name) }
};
