<script lang="ts">
	import PostsList from '$lib/components/PostsList.svelte';
	import { postsPerPage } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;
	const { page, category, totalPosts, posts } = data;

	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, totalPosts);
</script>

<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if posts && posts.length}
	<h1>
		Category: {category}
		<br />
		<small>Posts {lowerBound}–{upperBound} of {totalPosts}</small>
	</h1>
	<PostsList {posts} />
{:else}
	<h1>Oops!</h1>

	<p>Sorry, no posts to show here.</p>

	<a href="/posts">Back to posts</a>
{/if}
