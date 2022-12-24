import { browser } from '$app/environment';
import { STORAGE_KEY_THEME_MODE } from "$lib/storage-keys";
import { ThemeMode } from "$lib/enums/theme-modes.enum";

const DEFAULT_THEME_MODE = ThemeMode.Dark;

export class ThemeModeSwitcher {

    constructor() {
        let currentThemeMode = browser ? window.localStorage.getItem(STORAGE_KEY_THEME_MODE) : DEFAULT_THEME_MODE;

        if (!currentThemeMode) {
            this.setThemeMode(DEFAULT_THEME_MODE);
        }
    }

    public currentThemeMode() {

        let currentThemeMode = browser ? localStorage.getItem(STORAGE_KEY_THEME_MODE) : DEFAULT_THEME_MODE;

        let isThemeModeLight = currentThemeMode === 'light';
        let isThemeModeDark = currentThemeMode === 'dark';
        // let hasDefinedThemeMode = (isThemeModeDark || isThemeModeLight);

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
        
        let htmlElement = document?.getElementsByTagName("html")[0];
        htmlElement?.classList?.remove(ThemeMode.Dark, ThemeMode.Light);
        htmlElement?.classList?.add(themeMode);

        let bodyElement = document?.body;
        bodyElement?.classList?.remove(ThemeMode.Dark, ThemeMode.Light);
        bodyElement?.classList?.add(themeMode);

        browser ? localStorage.setItem(STORAGE_KEY_THEME_MODE, themeMode) : () => { };
    }


}
