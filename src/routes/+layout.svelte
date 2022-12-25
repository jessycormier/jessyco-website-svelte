<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/main.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer class="text-gray-700">
	<div class="container mx-auto px-5">
		<div class="py-28 flex flex-col lg:flex-row items-center">
			<span class="font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
				Built with ☕: Svelte Kit, TypeScript, and TailwindCSS.
			</span>
		</div>
	</div>
</footer>
