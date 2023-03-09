<script type="ts">
	export let data;
	let summaries = data.summaries;
</script>

<section class="">
	<h1 class="text-2xl md:text-4xl">bean blog</h1>
	<h2 class="text-xl md:text-3xl">articles:</h2>
	<div class="mt-8 grid gap-y-8">
		{#each summaries as { title, heroImage, slug, _updatedAt, _createdAt, articleTags }}
			<a itemprop="url" class="u-url p-name " href="/blog/{slug}">
				<div
					class="card lg:card-side bg-neutral-content shadow-xl 
          text-neutral-focus
          hover:bg-neutral-focus hover:text-neutral-content hover:shadow-2xl 
          transition-all ease-in-out duration-300"
				>
					<div class="card-body">
						<h3
							itemprop="name headline"
							class="card-title text-4xl underline decoration-4 decoration-transparent hover:decoration-primary"
						>
							{title}
						</h3>
						<div class="grid grid-cols-2 gap-x-4">
							<h4 class="mt-auto">Date created: {new Date(_createdAt).toLocaleDateString()}</h4>
							<h4 class="mt-auto">Date updated: {new Date(_updatedAt).toLocaleDateString()}</h4>
						</div>
						<div class="card-actions justify-start mt-auto">
							{#each articleTags as tag}
								<button class="badge badge-outline hover:bg-primary hover:text-neutral-focus"
									>{tag}</button
								>
							{/each}
						</div>
					</div>
					<figure class="">
						<img src={heroImage} class="max-w-none h-48 object-cover" alt="placeholder" />
					</figure>
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	.layout {
		border-color: orangered;
		border-style: solid;
		border-width: 1px; 
	}
</style>
