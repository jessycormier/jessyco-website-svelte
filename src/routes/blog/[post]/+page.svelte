<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import ImageHover from '$lib/components/ImageHover.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import { siteTitle } from '$lib/config';
	import { slugify } from '$lib/functions/slugify.function';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import timezone from 'dayjs/plugin/timezone';
	import type { PageData } from './$types';

	dayjs.extend(relativeTime);
	dayjs.extend(timezone);
	dayjs.tz.setDefault('Atlantic Standard Time');

	export let data: PageData;

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

<a href="#top" on:click={() => history.back()}>
	<ImageHover showDetails={true} title="Go Back">
		<img src="/api/polybg/1200x600/{slugify(title)}" alt="" class="h-72 object-cover w-full ease-in-out" />
	</ImageHover>
</a>
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
				<small>{dayjs(date).toString()}</small>
			{/if}
		</div>

		{@html data.PostContent}
	</article>

	<hr class="my-8" />

	{#if updated}
		Last Updated: <strong>{dayjs(updated).fromNow()}</strong>
	{/if}
	{#if categories}
		<div class="mt-4">
			<strong>Tags</strong>
		</div>

		<aside class="flex mb-6 space-x-2">
			{#each categories as category}
				<Tag {category} />
			{/each}
		</aside>
	{/if}
</Container>
