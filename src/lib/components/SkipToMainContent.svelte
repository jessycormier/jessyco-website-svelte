<script lang="ts">
	const focusMain = () => document.querySelector('main')?.focus();
</script>

<a
	on:click|preventDefault={focusMain}
	class="flex justify-center opacity-0 focus:opacity-100 bg-gray-500 focus:text-gray-800 transition-all absolute -top-64 focus:top-0 left-0 right-0 z-50"
	href="#main">
	Skip to main content
</a>

<style lang="scss">
</style>
