<script lang="ts">
	import { siteAuthor, socialLinks } from '$lib/config';
	import LogoTitle from './LogoTitle.svelte';
</script>

<footer class="py-4 sm:py-6 mt-12">
	<hr class="my-6 lg:my-8 border-gray-200 sm:mx-auto dark:border-gray-800 " />
	<div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<div class="mb-4 text-center hidden">
				<LogoTitle cssClasses="text-2xl" />
			</div>
			<div class="pl-1 text-xs">
				<span class="text-gray-700 dark:text-gray-600 font-mono">
					&copy;{new Date().getFullYear()}
					{siteAuthor}
					<br />
					Built with ☕,
					<a href="https://kit.svelte.dev">
						SvelteKit
					</a>
					and <a href="https://tailwindcss.com"> tailwindcss </a>
				</span>
			</div>
			<div class="pl-1 text-xs pt-2 flex mt-4 space-x-2 sm:justify-left sm:mt-0">
				{#each socialLinks as { href, sr, icon }}
					<a {href} class="text-gray-700 hover:text-gray-900 dark:hover:text-white cursor-pointer p-1">
						<svelte:component this={icon} />
						<span class="sr-only">{sr}</span>
					</a>
				{/each}
			</div>
		</div>
		<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigation</h2>
				<ul class="text-gray-700 dark:text-gray-600">
					<li>
						<a href="/posts" class="hover:underline ">Posts</a>
					</li>
					<li>
						<a href="/posts/category/site-update" class="hover:underline">Site Updates</a>
					</li>
					<li>
						<a href="/rss.xml" class="hover:underline">RSS</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">The Happenings</h2>
				<ul class="text-gray-700 dark:text-gray-600">
					<li>
						<a href="/now" class="hover:underline">Now</a>
					</li>
					<li>
						<a href="https://twitter.com/jessycormier" class="hover:underline">Twitter</a>
					</li>
					<li>
						<a href="/todos" class="hover:underline">Todos</a>
					</li>
				</ul>
			</div>

			<!-- <div>
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
				<ul class="text-gray-700 dark:text-gray-600">
					<li class="mb-4">
						<a href="#" class="hover:underline">Privacy Policy</a>
					</li>
					<li>
						<a href="#" class="hover:underline">Terms &amp; Conditions</a>
					</li>
				</ul>
			</div> -->
		</div>
	</div>

	<div class="sm:flex sm:items-center sm:justify-between mt-16" />
</footer>
