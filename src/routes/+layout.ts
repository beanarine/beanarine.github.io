import type { LayoutLoad } from './$types';
export const prerender = 'auto';
export const trailingSlash = 'always';
export const load: LayoutLoad = async ({ url, fetch }) => ({
	path: url.pathname,
	res: await fetch(url.pathname)
});
