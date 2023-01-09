<script lang="ts">
	import AnimatedText from '$lib/components/AnimatedText.svelte';
	import Container from '$lib/components/Container.svelte';
	import ImageHover from '$lib/components/ImageHover.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import { siteLink, siteTitle } from '$lib/config';
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

	function onBackClick() {
		history.back();
		console.log('You went back, nice.');
	}
</script>

<svelte:head>
	<title>{title} - {siteTitle}</title>
	<meta data-key="description" name="description" content={excerpt} />

	<meta name="title" content={siteTitle} />
	<meta name="description" content={excerpt} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article" />
	<meta property="og:url" content={siteLink + data.path} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta property="og:image" content="{siteLink}/api/polybg/1200x630/{slugify(title)}" />

	<!-- Twitter -->
	<meta property="twitter:card" content="{siteLink}/api/polybg/800x418/{slugify(title)}" />
	<meta property="twitter:url" content={siteLink + data.path} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={excerpt} />
	<meta property="twitter:image" content="{siteLink}/api/polybg/1200x630/{slugify(title)}" />
	<meta name="twitter:image:alt" content={title} />
</svelte:head>

<a href="#top" on:click={onBackClick} aria-label="Go back to previous page">
	<ImageHover showDetails={true} title="Go Back">
		<img src="/api/polybg/1200x630/{slugify(title)}" alt="" class="h-72 object-cover w-full ease-in-out" />
	</ImageHover>
</a>
<Container>
	<article class="prose prose-stone max-w-none dark:prose-invert lg:prose-xl m-auto mt-24">
		<h1>
			<AnimatedText>
				{title}
			</AnimatedText>
		</h1>
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
