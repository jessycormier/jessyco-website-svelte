<script type="ts">
	import MoonIcon from '$lib/components/icons/MoonIcon.svelte';
	import SunIcon from '$lib/components/icons/SunIcon.svelte';
	import { ThemeMode } from '$lib/enums/theme-modes.enum';
	import { ThemeModeSwitcher } from '$lib/services/theme-mode-switcher';

	let theme = new ThemeModeSwitcher();

	const onToggleThemeClick = () => {
		theme.toggleThemeMode();
		theme = theme;
	};

	const colorClasses = 'text-gray-900 dark:text-yellow-500';
	const widthClasses = 'w-5';
</script>

<button on:click={onToggleThemeClick} class="cursor-pointer transition-colors {widthClasses}" title="Toggle Theme">
	{#if theme.currentThemeMode() === ThemeMode.Dark}
		<SunIcon {widthClasses} {colorClasses} />
		<span class="sr-only">Switch to light theme</span>
	{/if}

	{#if theme.currentThemeMode() === ThemeMode.Light}
		<MoonIcon {widthClasses} {colorClasses} />
		<span class="sr-only">Switch to dark theme</span>
	{/if}
</button>
