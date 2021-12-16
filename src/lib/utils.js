
const convertToRgba = (hex, alpha = 1) => {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function formatThemeFile(theme){
	const {meta, themeValues} = theme
	const {toolbar, tabsbar} = themeValues
		
	const gkTheme = 
`{
	meta: {
		name: ${meta.name},
		scheme: ${meta.scheme}
	},
	themeValues: {
		root: {
			red: ${themeValues.root.red},
			orange: ${themeValues.root.orange},
			yellow: ${themeValues.root.yellow},
			green: ${themeValues.root.green},
			blue: ${themeValues.root.blue},
			ltblue: ${themeValues.root.ltblue},
			app__bg0: ${themeValues.root.app__bg0},
			"toolbar__bg0": "lighten(saturate(@app__bg0, 3%), 6%)",
			"toolbar__bg1": "lighten(@toolbar__bg0, 4%)",
			"toolbar__bg2": "lighten(@toolbar__bg1, 6%)",
			"panel__bg0": "lighten(@app__bg0, 5%)",
			"panel__bg1": "lighten(@panel__bg0, 5%)",
			"panel__bg2": "lighten(@panel__bg1, 5%)",
			"input__bg": "fade(#000000, 20%)",
			"input-bg-warn-color": "fade(@orange, 60%)",
			"panel-border": "darken(@app__bg0, 4%)",
			"section-border": "fade(${themeValues.root.sectionBorder}, 8%)",
			"subtle-border": "fade(${themeValues.root.subtleBorder}, 4%)",
			"modal-overlay-color": "${convertToRgba(themeValues.root.modalOverlay, 0.5)}",
			".text-color": "${themeValues.root.textColor}",
			"text-selected": "@.text-color",
			"text-normal": "fade(@.text-color, 75%)",
			"text-secondary": "fade(@.text-color, 60%)",
			"text-disabled": "fade(@.text-color, 40%)",
			"text-accent": "${themeValues.root.textAccent}",
			"text-inverse": "${themeValues.root.textInverse}",
			"btn-text": "@text-normal",
			"btn-text-hover": "@text-selected",
			"default-border": "@text-normal",
			"default-bg": "transparent",
			"default-hover": "transparent",
			"default-border-hover": "@text-selected",
			"primary-border": "@blue",
			"primary-bg": "fade(@blue, 20%)",
			"primary-hover": "fade(@blue, 60%)",
			"success-border": "@green",
			"success-bg": "fade(@green, 20%)",
			"success-hover": "fade(@green, 60%)",
			"warning-border": "@orange",
			"warning-bg": "fade(@orange, 20%)",
			"warning-hover": "fade(@orange, 60%)",
			"danger-border": "@red",
			"danger-bg": "fade(@red, 20%)",
			"danger-hover": "fade(@red, 60%)",
			"hover-row": "fade(@blue, 10%)",
			"danger-row": "fade(@red, 60%)",
			"selected-row": "fade(@blue, 20%)",
			"warning-row": "fade(@orange, 60%)",
			"droppable": "fade(@yellow, 30%)",
			"drop-target": "fade(@green, 50%)",
			"input--disabled": "fade(#000000, 10%)",
			"link-color": "${themeValues.root.linkColor}",
			"form-control-focus": "@blue",
			"code-bg": "@app__bg0",
			"scroll-thumb-border": "@app__bg0",
			"scroll-thumb-bg": "@toolbar__bg2",
			"scroll-thumb-bg-light": "lighten(@toolbar__bg2, 20%)",
			"wip-status": "fade(@blue, 40%)",
			"card__bg": "@panel__bg2",
			"card-shadow": "${convertToRgba(themeValues.root.cardShadow, 0.2)}",
			"filtering": "fade(@blue, 50%)",
			"soloing": "fade(@orange, 50%)",
			"checked-out": "fade(@green, 30%)",
			"soloed": "fade(@orange, 30%)",
			"added-line": "fade(@green, 20%)",
			"deleted-line": "fade(@red, 20%)",
			"filter-match": "fade(@blue, 50%)",
			"clone__progress": "fade(@blue, 70%)",
			"toolbar__prompt": "fade(@blue, 20%)",
			"modified-line": "fade(${themeValues.root.modifiedLine}, 25%)",
			"verified": "fade(@green, 30%)",
			"unverified": "fade(${themeValues.root.unverified}, 10%)",
			"drop-sort-border": "@green",
			"terminal__repo-name-color": "${themeValues.root.termRepoName}",
			"terminal__repo-branch-color": "${themeValues.root.termRepoBranch}",
			"terminal__repo-tag-color": "${themeValues.root.termRepoTag}",
			"terminal__repo-upstream-color": "${themeValues.root.termRepoUpstream}"
   		},
		"toolbar": {
			"text-selected": "${convertToRgba(toolbar.textSelected, 1)}",
			"text-normal": "${convertToRgba(toolbar.textNormal, 0.9)}",
			"text-secondary": "${convertToRgba(toolbar.textSecondary, 0.6)}",
			"text-disabled": "${convertToRgba(toolbar.textDisabled, 0.4)}",
			"section-border": "${convertToRgba(toolbar.sectionBorder, 0.2)}",
			"input__bg": "${convertToRgba(toolbar.input__bg, 0.2)}",
			"link-color": "${convertToRgba(toolbar.linkColor)}",
			"btn-text": "var(--text-normal)"
		},
		"tabsbar": {
			"text-selected": "${convertToRgba(tabsbar.textSelected)}",
			"text-normal": "${convertToRgba(tabsbar.textNormal, 0.9)}",
			"text-secondary": "${convertToRgba(tabsbar.textSecondary, 0.6)}",
			"text-disabled": "${convertToRgba(tabsbar.textDisabled, 0.4)}",
			"section-border": "${convertToRgba(toolbar.sectionBorder, 0.2)}",
			"input__bg": "${convertToRgba(tabsbar.input__bg, 0.2)}",
			"link-color": "${convertToRgba(tabsbar.linkColor)}",
			"btn-text": "var(--text-normal)"
		}
	}
}`;
	return JSON.parse(JSON.stringify(gkTheme));
}

export function getThemeFile(themeJson){

}

