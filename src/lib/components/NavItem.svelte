<script lang="ts">
	import { currentPage } from '$lib/stores/store';

	export let href: string;
	export let external = false;

	$: isCurrentPage = $currentPage.startsWith(href);
</script>

<li
	class={isCurrentPage ? 'bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 font-bold px-2 rounded' : 'px-2'}>
	<a
		class="p-2 my-3"
		{href}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
		rel={external ? 'external' : undefined}>
		<slot />
	</a>
</li>

<!-- Devider -->
<!-- <li><span class="text-gray-500 mx-2">/</span></li> -->

<!-- <li class="dark:bg-gray-50 dark:text-gray-900 bg-gray-900 text-gray-50 font-bold px-2 rounded">You're Here Link</li> -->
<style class="scss">
</style>
