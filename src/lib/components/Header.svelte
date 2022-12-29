<script lang="ts">
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
	import { navItems } from '$lib/config';
	import NavItem from './NavItem.svelte';
</script>

<div class="flex items-center content-between font-mono my-16">
	<a href="/" class="dark:text-gray-50 text-gray-800 text-3xl group"
		>Jessy<span class="group-hover:opacity-0 opacity-20 transition-opacity duration-500">.</span>Co<span
			class="group-hover:opacity-100 opacity-20 transition-opacity duration-500">rmier</span
		></a>
	<nav class="grow">
		<ol class="list-reset flex justify-end items-center gap-1">
			{#each navItems as page}
				<NavItem href={page.route} external={page.external}>
					{page.title}
				</NavItem>
			{/each}
			<li>
				<DarkModeToggle />
			</li>
		</ol>
	</nav>
</div>
