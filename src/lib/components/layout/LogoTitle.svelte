<script lang="ts">
	import JessyCormier from './JessyCormier.svelte';
	import Logo from './Logo.svelte';
	export let cssClasses = 'text-3xl';

	const bracketColorCss = 'fill-blue-800 group-hover:fill-amber-500 group-focus:fill-amber-500 duration-700 group-hover:animate-pulse group-focus:animate-pulse';
	const letterColorCss = 'duration-75';
</script>

<a href="/" class="dark:text-white text-black {cssClasses} group font-mono text-center flex items-center align-middle">
	<Logo
		svgClasses="fill-black dark:fill-white w-10 h-10 transition-all "
		lbClasses={bracketColorCss}
		rbClasses={bracketColorCss}
		jClasses={letterColorCss}
		cClasses={letterColorCss} />
	<div class="ml-2">
		<JessyCormier />
	</div>
</a>
