import { browser } from '$app/environment';
import { STORAGE_KEY_THEME_MODE } from '$lib/storage-keys';
import { ThemeMode } from '$lib/enums/theme-modes.enum';
import { noop } from '$lib/functions/noop.function';

const DEFAULT_THEME_MODE = ThemeMode.Dark;

export class ThemeModeSwitcher {
	constructor() {
		const currentThemeMode = browser ? window.localStorage.getItem(STORAGE_KEY_THEME_MODE) : DEFAULT_THEME_MODE;

		if (!currentThemeMode) {
			this.setThemeMode(DEFAULT_THEME_MODE);
		}
	}

	public currentThemeMode() {
		const currentThemeMode = browser ? localStorage.getItem(STORAGE_KEY_THEME_MODE) : DEFAULT_THEME_MODE;

		const isThemeModeLight = currentThemeMode === 'light';
		const isThemeModeDark = currentThemeMode === 'dark';
		// const hasDefinedThemeMode = (isThemeModeDark || isThemeModeLight);

		if (isThemeModeLight) {
			return ThemeMode.Light;
		}

		if (isThemeModeDark) {
			return ThemeMode.Dark;
		}

		return ThemeMode.Dark;
	}

	public toggleThemeMode() {
		const currentTheme = this.currentThemeMode();

		if (currentTheme === ThemeMode.Dark) {
			this.setThemeMode(ThemeMode.Light);
		}

		if (currentTheme === ThemeMode.Light) {
			this.setThemeMode(ThemeMode.Dark);
		}
	}

	setThemeMode = (themeMode: ThemeMode) => {
		const htmlElement = document?.getElementsByTagName('html')[0];
		htmlElement?.classList?.remove(ThemeMode.Dark, ThemeMode.Light);
		htmlElement?.classList?.add(themeMode);

		const bodyElement = document?.body;
		bodyElement?.classList?.remove(ThemeMode.Dark, ThemeMode.Light);
		bodyElement?.classList?.add(themeMode);

		browser ? localStorage.setItem(STORAGE_KEY_THEME_MODE, themeMode) : noop();
	};
}
