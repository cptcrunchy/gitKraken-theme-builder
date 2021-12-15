import { writable } from "svelte/store";

const gkTheme = writable([])
const gkThemeStore = {
	subscribe: gkTheme.subscribe,
	addProperty: (newProperty) => {
		gkTheme.update(props => ([...props, newProperty]))
	},
	setTheme: properties => {
		gkTheme.set(properties)
	}
}


export default gkThemeStore

