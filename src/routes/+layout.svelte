<script lang="ts">
	import { preloadCode } from '$app/navigation';
	import Container from '$lib/components/Container.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import SkipToMainContent from '$lib/components/SkipToMainContent.svelte';
	import { navItems, siteLink, siteTitle } from '$lib/config';
	import { currentPage } from '$lib/stores/store';
	import '$lib/styles/main.scss';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;

	const animationDurationBase = 250;
	const transitionIn = { delay: 150, duration: animationDurationBase };
	const transitionOut = { duration: animationDurationBase / 2.5 };

	$: currentPage.set(data.path);

	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});
	const content =
		"Hello!, I'm Jessy👋 I'm a Senior Front-End Developer with a passion for web development and user experience. Come visit my site, maybe you'll find something useful here!";
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Jessy.co</title>
	<meta name="title" content={siteTitle} />
	<meta name="description" {content} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteLink} />
	<meta property="og:title" content={siteTitle} />
	<meta property="og:description" {content} />
	<meta property="og:image" content="/social.svg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={siteLink} />
	<meta property="twitter:title" content={siteTitle} />
	<meta property="twitter:description" {content} />
	<meta property="twitter:image" content="{siteLink}/social.svg" />
</svelte:head>
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
