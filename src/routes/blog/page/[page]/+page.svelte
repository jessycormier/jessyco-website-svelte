<!-- This file handles any /blog/page/x route for pagination -->
<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
	import { postsPerPage, siteDescription, siteTitle } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;
	const { page, totalPosts, posts } = data;

	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, totalPosts);
</script>

<svelte:head>
	<title>Blog - page {page} - {siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<Container>
	<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
	{#if posts.length}
		<h1 class="text-4xl mt-12">Blog</h1>
		<small class="opacity-70">post {lowerBound}–{upperBound} of {totalPosts}</small>
		<div class="mt-12">
			<PostsList {posts} />
		</div>
		<Pagination currentPage={page} {totalPosts} />
	{:else}
		<h1>Oops!</h1>

		<p>Sorry, no posts to show here.</p>

		<a href="/blog">Back to blog</a>
	{/if}
</Container>
