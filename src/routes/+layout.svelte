<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from '$lib/components/header.svelte';
	import Head from '$lib/components/head.svelte';
	import 'uno.css';
	import '../app.pcss';

	export let data: LayoutData;

	let { res, path } = data;

	$: if (data) path = data.path;
</script>

<main class="grid grid-cols-1 justify-center  h-feed">
	<Head />

	<Header {path} />

	<div class="mt-16 m-4 md:m-16 grid grid-cols-1 h-feed max-w-4xl justify-self-center">
		<slot />
	</div>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</main>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
