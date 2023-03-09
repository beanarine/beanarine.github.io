<script lang="ts">
	export let data: {
		slug: string;
		article: {
			_id: string;
			_updatedAt: Date;
			_createdAt: Date;
			title: string;
			author: string;
			slug: string;
			heroImage: string;
			content: string;
		};
	};
</script>

<article class="bg-base-200 rounded-box-lg shadow-2xl">
	<div class="bg-neutral text-neutral-content grid md:grid-cols-2 rounded-t-lg">
		<figure class="w-[100%] md:w-auto mx-auto md:mr-0 md:order-last">
			<img
				class="object-cover w-[100%]  md:w-auto max-h-64 rounded-t-lg md:rounded-none  md:rounded-tr-lg"
				src={data.article.heroImage}
				alt="placeholder"
			/>
		</figure>
		<h1 class="m-4 md:m-8 md:mt-auto md:text-4xl text-3xl">{data.article.title}</h1>
	</div>

	<div class="bg-base-300 p-8 rounded-b prose lg:prose-xl ">
		{@html data.article.content}
	</div>
</article>
