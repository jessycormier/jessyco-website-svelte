<script lang="ts">
	import { siteAuthor, socialLinks } from '$lib/config';
	import Logo from './Logo.svelte';
	import LogoTitle from './LogoTitle.svelte';
</script>

<footer class="py-4 sm:py-6 mt-12">
	<hr class="my-6 lg:my-8 border-gray-200 sm:mx-auto dark:border-gray-800 " />
	<div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<div class="mb-4 text-center">
				<LogoTitle cssClasses="text-2xl" />
			</div>
			<div class="pl-1 text-xs">
				<span class="tex text-gray-500 dark:text-gray-400 font-mono">
					&copy;{new Date().getFullYear()}
					{siteAuthor}
					<br />

					Built with ☕,
					<a href="https://kit.svelte.dev">
						Svelte<span class="opacity-60">Kit</span>
					</a>
					and <a href="https://tailwindcss.com"> tailwindcss </a>
				</span>
			</div>
			<div class="pl-1 text-xs pt-2 flex mt-4 space-x-2 sm:justify-left sm:mt-0">
				{#each socialLinks as { href, sr, icon }}
					<a {href} class="text-gray-500 hover:text-gray-900 dark:hover:text-white cursor-pointer">
						<svelte:component this={icon} />
						<span class="sr-only">{sr}</span>
					</a>
				{/each}
			</div>
		</div>
		<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Site Links</h2>
				<ul class="text-gray-600 dark:text-gray-400">
					<li class="mb-4">
						<a href="/blog" class="hover:underline ">Blog</a>
					</li>
					<li>
						<a href="/api/rss.xml" class="hover:underline">RSS</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Other Links</h2>
				<ul class="text-gray-600 dark:text-gray-400">
					<li class="mb-4">
						<a href="/todos" class="hover:underline">Todos</a>
					</li>
					<li>
						<a href="/now" class="hover:underline">Now</a>
					</li>
				</ul>
			</div>

			<!-- <div>
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
				<ul class="text-gray-600 dark:text-gray-400">
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
