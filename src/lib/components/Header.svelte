<script lang="ts">
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
	import { navItems } from '$lib/config';
	import Logo from './Logo.svelte';
	import NavItem from './NavItem.svelte';
</script>

<div class="flex items-center content-between font-mono my-16">
	<Logo />
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
