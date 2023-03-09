import type { ThemeConfig, DateConfig, HeadConfig, HeaderConfig, FooterConfig } from '$lib/types/general';

export const theme: ThemeConfig = [
  {
		name: 'night',
		text: '🌃 Night'
	},
	{
		name: 'cmyk',
		text: '🖨 Light'
	},
	{
		name: 'dracula',
		text: '🧛 Dark'
	},
	{
		name: 'valentine',
		text: '🌸 Valentine'
	},
	{
		name: 'aqua',
		text: '💦 Aqua'
	},
	{
		name: 'synthwave',
		text: '🌃 Synthwave'
	},

	{
		name: 'lofi',
		text: '🎶 Lo-Fi'
	},
	{
		name: 'lemonade',
		text: '🍋 Lemonade'
	},
	{
		name: 'cupcake',
		text: '🧁 Cupcake'
	},
	{
		name: 'garden',
		text: '🏡 Garden'
	},
	{
		name: 'retro',
		text: '🌇 Retro'
	},
	{
		name: 'black',
		text: '🖤 Black'
	}
];

export const date: DateConfig = {
	locales: 'en-US',
	options: {
		year: '2-digit',
		weekday: 'long',
		month: 'numeric',
		day: 'numeric'
	}
};

export const head: HeadConfig = {}

export const header: HeaderConfig = {
	nav: [
		{
			text: 'About',
			link: '/about'
		},
		{
			text: 'Blog',
			link: '/blog'
		},
		{
			text: 'Shop',
			link: '/shop'
		},
	]
};

export const footer: FooterConfig = {
	nav: [
		{
			text: 'Feed',
			link: '/atom.xml'
		},
		{
			text: 'Sitemap',
			link: '/sitemap.xml'
		}
	]
};
