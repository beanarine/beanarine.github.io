<script type="ts">
  import Card from "$lib/components/card.svelte"
	export let data;
	let summaries = data.summaries;
</script>

<section class="">
	<h1 class="text-2xl md:text-4xl">bean blog</h1>
	<h2 class="text-xl md:text-3xl">articles:</h2>
	<div class="mt-8 flex lg:flex-col gap-16">
    {#each summaries as summary}
      <Card {...summary} />
    {/each}
  </div>
</section>
