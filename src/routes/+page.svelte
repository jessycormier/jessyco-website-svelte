<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
	import ProfilePicture from '$lib/components/ProfilePicture.svelte';
	import TextHighlight from '$lib/components/TextHighlight.svelte';
	import { siteTitle, siteLink } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{siteTitle}</title>
	<link rel="canonical" href={siteLink} />
	<link rel="alternate" type="application/rss+xml" href={siteLink + '/rss.xml'} />
</svelte:head>

<section class="dark:bg-gray-800 bg-gray-50 pt-12 pb-12 text-2xl p-4 overflow-hidden top-0 left-0 right-0">
	<div class="container mx-auto">
		<div class="flex justify-start content-center">
			<div class="mr-8 hidden md:block">
				<ProfilePicture />
			</div>
			<div class="flex flex-col justify-center text-center md:text-left">
				<p class="text-4xl mb-8">
					Hello!, and welcome <span class="inline-block motion-safe:animate-bounce h-5">👋</span>
				</p>
				<p>
					I'm a
					<TextHighlight>Senior Front-End Developer</TextHighlight>
					based in Canada with a passion for
					<TextHighlight>web development</TextHighlight> and
					<TextHighlight>user experience</TextHighlight>.
				</p>
			</div>
		</div>
	</div>
</section>

<Container>
	<section class="my-12">
		<h2 class="text-4xl mb-16">Recent Posts</h2>
		<PostsList posts={data.posts} />
		<p class="text-center pt-12">
			<a href="/posts">See More Posts</a>
		</p>
	</section>
</Container>
