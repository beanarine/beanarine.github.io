import type {
	ThemeConfig,
	DateConfig,
	HeadConfig,
	HeaderConfig,
	FooterConfig
} from '$lib/types/general';

export const theme: ThemeConfig = [
	{
		name: 'dracula',
		text: '🧛 Dark'
	},
	{
		name: 'cupcake',
		text: '🧁 Cupcake'
	},
];

export const date: DateConfig = {
	locales: 'fr-CA',
	options: {
		year: 'numeric',
		weekday: 'long',
		month: 'numeric',
		day: 'numeric'
	}
};

export const head: HeadConfig = {};

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
			text: 'Projects',
			link: '/projects'
		}
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
