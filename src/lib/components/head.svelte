<script lang="ts">
	import { dev } from '$app/environment';
	import { head } from '$lib/config/general';
	import { site } from '$lib/config/site';
	import { assets, base } from '$app/paths';
</script>

<svelte:head>
	<meta name="Author" content={site.author?.name} />
	<meta name="Description" content={site.description} />
	<title>{site.title}</title>
	<meta name="keywords" content={site.keywords?.join(', ')} />
	<title>{site.subtitle ? `${site.title} - ${site.subtitle}` : site.title}</title>
	<link rel="canonical" href={site.protocol + site.domain} />
</svelte:head>
