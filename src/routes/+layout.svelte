<script lang="ts">
	import '$lib/styles/main.scss';

	import { preloadCode } from '$app/navigation';
	import { currentPage } from '$lib/stores/store';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import SkipToMainContent from '$lib/components/SkipToMainContent.svelte';
	import { navItems } from '$lib/config';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Container from '$lib/components/Container.svelte';

	export let data: any;
	export const prerender = true;

	const animationDurationBase = 250;
	const transitionIn = { delay: 150, duration: animationDurationBase };
	const transitionOut = { duration: animationDurationBase / 2.5 };

	$: currentPage.set(data.path);

	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);

		preloadCode(...navRoutes);
	});
</script>

<SkipToMainContent />

<Container>
	<Header />
</Container>

{#key data.path}
	<main id="main" tabindex="-1" style="outline:transparent" in:fade={transitionIn} out:fade={transitionOut}>
		<slot />
	</main>
{/key}

<Container>
	<Footer />
</Container>
