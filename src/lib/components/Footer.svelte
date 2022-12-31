<script lang="ts">
	import { siteAuthor, socialLinks } from '$lib/config';
</script>

<footer class="py-4 sm:py-6 mt-12">
	<!-- <div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<a href="https://flowbite.com/" class="flex items-center">
				<img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="FlowBite Logo" />
				<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
			</a>
		</div>
		<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
				<ul class="text-gray-600 dark:text-gray-400">
					<li class="mb-4">
						<a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
					</li>
					<li>
						<a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
				<ul class="text-gray-600 dark:text-gray-400">
					<li class="mb-4">
						<a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
					</li>
					<li>
						<a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
				<ul class="text-gray-600 dark:text-gray-400">
					<li class="mb-4">
						<a href="#" class="hover:underline">Privacy Policy</a>
					</li>
					<li>
						<a href="#" class="hover:underline">Terms &amp; Conditions</a>
					</li>
				</ul>
			</div>
		</div>
	</div> -->
	<!-- <hr class="my-6 border-gray-200 sm:mx-auto dark:border-blue-500 lg:my-8" /> -->
	<div class="sm:flex sm:items-center sm:justify-between mx-4">
		<span class="text-sm text-gray-500 dark:text-gray-400 font-mono">
			&copy;{new Date().getFullYear()}
			{siteAuthor}
			<br />

			Built with ☕,
			<a href="https://kit.svelte.dev">
				Svelte<span class="opacity-60">Kit</span>
			</a>
			and <a href="https://tailwindcss.com"> tailwindcss </a>
		</span>
		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
			{#each socialLinks as { href, sr, icon }}
				<a {href} class="text-gray-500 hover:text-gray-900 dark:hover:text-white cursor-pointer">
					<svelte:component this={icon} />
					<span class="sr-only">{sr}</span>
				</a>
			{/each}
		</div>
	</div>
</footer>
