<script lang="ts">
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
	import { navItems } from '$lib/config';
	import NavItem from '../NavItem.svelte';
	import LogoTitle from './LogoTitle.svelte';
</script>

<div class="flex flex-wrap items-center content-between sm:justify-end font-mono my-16 gap-4 sm:gap-0">
	<LogoTitle />
	<nav aria-label="main menu" class="grow ">
		<ul class="list-reset flex justify-center sm:justify-end items-center gap-1">
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
