import { writable } from "svelte/store";
import { ThemeMode } from "$lib/enums/theme-modes.enum";

export const theme = writable(ThemeMode.Dark);
