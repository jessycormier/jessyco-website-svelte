<script lang="ts">
	export let category = '';
</script>

<a href="/blog/category/{category}/">
	<span
		class="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 transition-colors dark:bg-gray-700 hover:dark:bg-gray-600 dark:text-gray-300">
		{category}
	</span>
</a>
