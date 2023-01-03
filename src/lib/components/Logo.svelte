<script lang="ts">
	import Flip from "./Flip.svelte";

	export let cssClasses = 'text-3xl';
</script>

<a href="/" class="dark:text-gray-50 text-gray-800 {cssClasses} group font-mono"
	><span class="mr-2 group-hover:opacity-100 opacity-70 transition-opacity duration-500 "
		><span class="text-blue-700 font-extralight">&lcub;</span>J<Flip>J</Flip><span class="text-blue-700 font-extralight">&rcub;</span></span
	>Jessy<span class="group-hover:opacity-0 opacity-20 transition-opacity duration-500">.</span>Co<span
		class="group-hover:opacity-100 opacity-20 transition-opacity duration-500">rmier</span
	></a>
