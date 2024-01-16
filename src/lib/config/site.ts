import type { SiteConfig } from '$lib/types/site';

const bio = ['queer anarchist tech punk', '33/x/usa she/her', 'cat mom'];

export const site: SiteConfig = {
	protocol: import.meta.env.DEV ? 'http://' : 'https://',
	domain: 'beanarine.com/',
	title: 'bean',
	subtitle: '',
	lang: 'en-US',
	description: 'Powered by SvelteKit/Sanity',
	author: {
		avatar: 'https://avatars.githubusercontent.com/u/95835984',
		name: 'beanarine',
		status: '🌸',
		bio: bio[~~(Math.random() * bio.length)],
		metadata: [
			{
				text: 'Profile',
				link: '/about-me'
			}
		]
	},
	themeColor: '#3D4451'
};
