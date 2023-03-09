import { readable } from 'svelte/store';

export interface Article {
	title: string;
	subtitle: string;
	author: string;
	slug: string;
	content: string;
	isPublished: boolean;
	datePublished: Date;
}

export const articles = readable<Article[]>([
	{
		title: 'Test Article',
		slug: 'test-article',
		isPublished: true,
		datePublished: new Date('2023-01-01')
	}
]);
