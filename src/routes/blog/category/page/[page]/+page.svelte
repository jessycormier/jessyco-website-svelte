<!-- Renders posts listed by category -->
<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription, siteTitle, postsPerPage } from '$lib/config';
	import Container from '$lib/components/Container.svelte';

	export let data;
	const { page, totalPosts, posts } = data;

	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, totalPosts);
</script>

<svelte:head>
	<title>Blog category - page {page} - {siteTitle}</title>
	<meta data-key="description" name={siteDescription} />
</svelte:head>

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
