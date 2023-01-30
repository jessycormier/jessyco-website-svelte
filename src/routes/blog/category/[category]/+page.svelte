<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	
	const { page, posts, category, total } = data;
</script>

<Container>
	<h1 class="text-4xl mb-8">Blog category: {category}</h1>
	{#if posts.length}
		<PostsList {posts} />
		<Pagination currentPage={page} totalPosts={total} path="/blog/category/{category}/page" />
	{:else}
		<div class="my-48 text-center">
			<p><strong>Oh oh!</strong> Sorry, I couldn't find any posts in the category "{category}".</p>
			<p><a href="/blog">Back to blog</a></p>
		</div>
	{/if}
</Container>
