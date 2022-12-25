<script type="ts">
	import { ThemeModeSwitcher } from '$lib/services/theme-mode-switcher';
	import { ThemeMode } from '$lib/enums/theme-modes.enum';
	import SunIcon from '$lib/components/icons/SunIcon.svelte';
	import MoonIcon from '$lib/components/icons/MoonIcon.svelte';

	const theme = new ThemeModeSwitcher();

	const onToggleThemeClick = () => {
		theme.toggleThemeMode();
	};
</script>

<button
	on:click={onToggleThemeClick}
	class="cursor-pointer w-10 h-10 p-3 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors">
	{#if theme.currentThemeMode() === ThemeMode.Light}
		<SunIcon />
	{/if}

	{#if theme.currentThemeMode() === ThemeMode.Dark}
		<MoonIcon />
	{/if}
</button>
