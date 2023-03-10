import { query } from '$lib/sanity/+server';
//import type { PageLoad } from './$types';
import { marked } from 'marked';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = async ({ fetch, params }) => {
	const slug = params['slug'];
	const args = `*[slug.current == '${slug}'][0]{
  _id, title, author, content,
  _createdAt, _updatedAt, 
  "heroImage": heroImage.asset->url,
  articleTags
  }`;
	const article = await query(args);

	return {
		slug,
		article: {
      ... article,
      content: marked.parse(article.content),
    }
	};
};
