import { writable } from "svelte/store";

export const currentMenu = writable('');

export const setCurrentMenu = (name:string) => {
    currentMenu.set(name);
}
