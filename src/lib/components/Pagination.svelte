<script lang="ts">
	import { postsPerPage } from '$lib/config';

	export let currentPage: any;
	export let totalPosts: any;
	export let path = '/blog/page';

	let pagesAvailable: any;
	$: pagesAvailable = Math.ceil(totalPosts / postsPerPage);

	const isCurrentPage = (page: any) => page == currentPage;
</script>

<div class="flex justify-center my-12">
	{#key currentPage}
		{#if pagesAvailable > 1}
			<nav aria-label="Pagination navigation">
				<ul class="flex list-style-none space-x-4">
					{#each Array.from({ length: pagesAvailable }, (_, i) => i + 1) as page}
						<li class="">
							<a href="{path}/{page}" aria-current={isCurrentPage(page)} class:active={isCurrentPage(page)}>
								<span class="sr-only">
									{#if isCurrentPage(page)}
										Current page:
									{:else}
										Go to page
									{/if}
								</span>
								{page}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
	{/key}
</div>
