<script lang="ts">
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription, siteTitle } from '$lib/config';
	import Container from '$lib/components/Container.svelte';
	export let data: any;
</script>

<svelte:head>
	<title>Blog - {siteTitle}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<Container>
	<h1 class="text-4xl mb-12">Blog Posts</h1>

	<PostsList posts={data.posts} />

	
		<Pagination currentPage={1} totalPosts={data.total} />
	
</Container>
