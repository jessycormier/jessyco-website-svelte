<script lang="ts">
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
	import { navItems } from '$lib/config';
	import LogoTitle from './LogoTitle.svelte';
	import NavItem from '../NavItem.svelte';
	import Logo from './Logo.svelte';
</script>

<div class="flex items-center content-between font-mono my-16">
	<div>
		<LogoTitle />
	</div>

	<nav aria-label="main menu" class="grow">
		<ul class="list-reset flex justify-end items-center gap-1">
			{#each navItems as page}
				<NavItem href={page.route} external={page.external} ariaDetail={page.ariaDetail}>
					{page.title}
				</NavItem>
			{/each}
			<li>
				<DarkModeToggle />
			</li>
		</ul>
	</nav>
</div>
