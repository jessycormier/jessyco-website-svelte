<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Container>
	<h1 class="text-4xl mb-12">Blog Posts</h1>

	<PostsList posts={data.posts} />
</Container>
