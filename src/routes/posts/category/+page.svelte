<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import { siteTitle } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;
	const { uniqueCategories } = data;
</script>

<Container>
	<div>
		<h1 class="text-4xl mb-8">All blog categories</h1>

		<a href="/posts/">Back to Blog Posts</a>

		<ul>
			{#each uniqueCategories as category}
				<li>
					<a href="/posts/category/{category.title}">
						{category.title}
					</a>
					({category.count})
				</li>
			{/each}
		</ul>
	</div>
</Container>
