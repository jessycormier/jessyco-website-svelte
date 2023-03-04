<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	
	const { posts, category } = data;
</script>

<Container>
	<h1 class="text-4xl mb-8">Category: {category}</h1>
	{#if posts.length}
		<PostsList {posts} />
	{:else}
		<div class="my-48 text-center">
			<p><strong>Oh oh!</strong> Sorry, I couldn't find any posts in the category "{category}".</p>
			<p><a href="/posts">Back to posts</a></p>
		</div>
	{/if}
</Container>
