<script lang="ts">
	export let heroImage: string;
	export let slug: string;
	export let title: string;
	export let articleTags: string[];
	export let _createdAt: Date;
	export let _updatedAt: Date;
</script>

<article>
	<a itemprop="url" class="u-url p-name" href="/blog/{slug}">
		<div
			class="flex flex-col
          lg:grid lg:grid-cols-2 lg:flex-none
          rounded-lg
          max-w-sm lg:max-w-4xl lg:min-w-80 max-h-md lg:max-h-4xl
          shadow-lg hover:shadow-2xl
          outline outline-0 outline-offset-2 hover:outline-2 outline-pink-800
          transition-shadow ease-in-out duration-300"
		>
			<img
				class="col-span-2 lg:col-span-1
            object-cover [object-position:50% 75%]
            max-h-80 lg:max-h-[600px]
            w-[100%] max-w-sm lg:max-w-2xl lg:min-w-80 mx-auto lg:mr-0
            rounded-none rounded-t-lg
            lg:rounded-tr-none lg:rounded-l-lg"
				src={heroImage}
				alt="The author"
			/>
			<div
				class="flex flex-col
            items-stretch justify-between
            lg:rounded-r-lg rounded-t-lg lg:rounded-tl-none"
			>
				<div
					class="p-4 lg:px-8
              flex flex-col gap-4 grow
              bg-neutral-content text-neutral-focus
              hover:bg-neutral-focus hover:text-neutral-content
              transition-all ease-in-out duration-300"
				>
					<h3 class="lg:text-4xl text-3xl">
						{title} and more stuff
					</h3>
					<div class="flex flex-row gap-2">
						{#each articleTags as tag}
							<button
								class="badge badge-outline
                    hover:bg-primary hover:text-neutral-focus"
							>
								{tag}
							</button>
						{/each}
					</div>
					<p class="max-h-20 text-ellipsis overflow-hidden">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
						architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
						sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt.
					</p>
				</div>
				<h4
					class="justify-self-end
              bg-neutral-focus text-neutral-content
              mx-0 p-2 px-4 lg:px-8
              rounded-b-lg lg:rounded-bl-none"
				>
					✍🏻{new Date(_createdAt).toLocaleDateString('fr-ca')}
					/ 📝 {new Date(_updatedAt).toLocaleDateString('fr-ca')}
				</h4>
			</div>
		</div>
	</a>
</article>
