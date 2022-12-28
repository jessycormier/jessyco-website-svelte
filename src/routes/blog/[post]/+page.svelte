<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import { siteTitle } from '$lib/config';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(relativeTime);

	export let data: any;

	const { title, excerpt, date, updated, categories, author = 'Jessy Cormier' } = data.meta;
</script>

<svelte:head>
	<title>{title} - {siteTitle}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
</svelte:head>

<Container>
	<article class="prose prose-stone max-w-none dark:prose-invert lg:prose-xl m-auto mt-24">
		<h1 class="">{title}</h1>
		<div class="mb-8 text-sm text-gray-500">
			{#if author}
				by <span class="text-gray-700 dark:text-gray-300">{author}</span>
			{/if}
			{#if author && date}
				-
			{/if}
			{#if date}
				<span class="text-gray-700 dark:text-gray-300">{dayjs(date).fromNow()}</span>
			{/if}
		</div>

		{@html data.PostContent}
	</article>
	
	<hr class="my-8" />

	{#if !updated}
		Last Updated: <strong>{dayjs(updated).fromNow()}</strong>
	{/if}
	{#if categories}
	<div class="mt-4">
		<strong>Tags</strong>
	</div>	
	
		<aside class="flex mb-6 space-x-2">
			{#each categories as category}
				<a href="/blog/category/{category}/">
					<span
						class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
						{category}
					</span>
				</a>
			{/each}
		</aside>
	{/if}
</Container>
