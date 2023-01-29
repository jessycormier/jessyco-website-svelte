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

<Container>
	{#if posts.length}
		<h1>Posts {lowerBound}–{upperBound} of {totalPosts}</h1>
		<Pagination currentPage={page} {totalPosts} />

		<PostsList {posts} />

		<Pagination currentPage={page} {totalPosts} />
	{:else}
		<h1>Oops!</h1>

		<p>Sorry, no posts to show here.</p>

		<a href="/blog">Back to blog</a>
	{/if}
</Container>
