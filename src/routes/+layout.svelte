<script lang="ts">
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import '$lib/styles/main.scss';

	import Container from '$lib/components/Container.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import SkipToMainContent from '$lib/components/SkipToMainContent.svelte';
	import { currentPage } from '$lib/stores/store';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { preloadCode } from '$app/navigation';
	import { page } from '$app/stores';
	import { navItems, siteLink, siteTitle } from '$lib/config';
	import { slugify } from '$lib/functions/slugify.function';
	import type { PageData } from './$types';

	export let data: PageData;

	const animationDurationBase = 450;
	const transitionIn = { delay: 250, duration: animationDurationBase };
	const transitionOut = { duration: animationDurationBase / 2.5 };

	$: currentPage.set(data.path);

	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
		inject({
			mode: dev ? 'development' : 'production',
			debug: dev
		});
	});
	const siteDefaultDescription =
		"Hello!, I'm Jessy👋 I'm a Senior Front-End Developer with a passion for web development and user experience. Come visit my site, maybe you'll find something useful here!";
	const title = $page?.data?.meta?.title || siteTitle;
	const ogImg = `${siteLink}/polybg/1200x630/${slugify($page?.data?.post?.title || 'bg')}.png`;
	const twitterImg = `${siteLink}/polybg/800x418/${slugify($page?.data?.post?.title || 'bg')}.png`;
	const description = $page?.data?.meta?.description || siteDefaultDescription;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta data-key="description" name="description" content={description} />
	<!-- Open Graph / Facebook -->
	<meta property="og:description" content={description} />
	<meta property="og:image:alt" content={description} />
	<meta property="og:image:height" content="600" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image" content={ogImg} />
	<meta property="og:site_name" content="Jessy.Co" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="object" />
	<meta property="og:url" content={siteLink + data.path} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image:src" content={twitterImg} />
	<meta name="twitter:site" content="@jessycormier" />
	<meta name="twitter:creator" content="@jessycormier" />
	<meta name="twitter:title" content={title} />

	<meta name="twitter:url" content={siteLink + data.path} />
	<meta name="twitter:image:alt" content={description} />
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
