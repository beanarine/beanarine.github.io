import { query } from '$lib/sanity/sanityClient';
import { marked } from 'marked';
//import type { PageLoad } from './$types';

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = async () => {
	//const tags = params['tags'];
	//const args = `*[_type == "article" && tags in [${tags}]]{
	const args = `*[_type == "post"]{
    _id, _createdAt, _updatedAt,
    title, author, "slug": slug.current,
    articleTags, 
    "heroImage": heroImage.asset->url,
    content,
  }`;
	const articles = await query(args);
	//const tagCloud: string[] = [];
	//articles.forEach((article) => tagCloud.push(...article.tags));
	return {
		summaries: articles.map((article) => ({
			_id: article._id,
			_createdAt: article._createdAt,
			_updatedAt: article._updatedAt,
			title: article.title,
			author: article.author,
			slug: article.slug,
			articleTags: article.articleTags.map((tag) => tag.label),
			heroImage: article.heroImage,
			content: marked.parse(article.content)
		}))
	};
};
