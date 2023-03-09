// sanityClient.js
import { createClient } from '@sanity/client';

const config = {
	projectId: process.env.SANITY_API_PROJECT_ID,
	dataset: process.env.SANITY_API_DATASET,
	apiVersion: '2023-03-03', // use current date (YYYY-MM-DD) to target the latest API version
	useCdn: false
	// token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
};

export const client = await createClient(config);

export const query = async (query: string) => await client.fetch(query);

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
	const posts = await client.fetch('*[_type == "post"]');
	return posts;
}

export async function createPost(post: Post) {
	const result = client.create(post);
	return result;
}

export async function updateDocumentTitle(_id, title) {
	const result = client.patch(_id).set({ title });
	return result;
}
