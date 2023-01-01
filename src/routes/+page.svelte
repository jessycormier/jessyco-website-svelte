<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
	import ProfilePicture from '$lib/components/ProfilePicture.svelte';
	import TextHighlight from '$lib/components/TextHighlight.svelte';
	import { siteTitle } from '$lib/config';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<section class="dark:bg-gray-800 bg-gray-50 pt-12 pb-12 text-2xl p-4 overflow-hidden top-0 left-0 right-0">
	<div class="container mx-auto">
		<div class="flex justify-start content-center">
			<div class="mr-8 hidden md:block">
				<ProfilePicture />
			</div>
			<div class="flex flex-col justify-center text-center md:text-left">
				<p class="text-4xl mb-8">
					Hello!, I'm Jessy <span class="inline-block motion-safe:animate-bounce h-5">👋</span>
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
			<a href="/blog">See More</a>
		</p>
		<!-- <Pagination currentPage={1} totalPosts={data.total} /> -->
	</section>
</Container>
