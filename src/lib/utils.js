const isNullOrEmpty = value => value == null || value == "";

const convertToRgba = (hex, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function sanitizeRootValues(root){
  let rootValues = "";   
  if(!isNullOrEmpty(root.red)) rootValues.concat(`"red": "${root.orange}",\r`)
  if(!isNullOrEmpty(root.orange)) rootValues.concat(`"orange": "${root.orange}",\r`) 
  if(!isNullOrEmpty(root.yellow)) rootValues.concat(`"yellow": "${root.yellow}",\r`) 
  if(!isNullOrEmpty(root.green)) rootValues.concat(`"green": "${root.green}",\r`) 
  if(!isNullOrEmpty(root.blue)) rootValues.concat(`"blue": "${root.blue}",\r`) 
  if(!isNullOrEmpty(root.ltblue)) rootValues.concat(`"ltblue": "${root.ltblue}",\r`) 
  if(!isNullOrEmpty(root.app__bg0)) rootValues.concat(`"app__bg0": "${root.app__bg0}",\r`) 
  if(!isNullOrEmpty(root.sectionBorder)) rootValues.concat(`"section-border": "fade(${root.sectionBorder}, 8%)",\r`) 
  if(!isNullOrEmpty(root.subtleBorder)) rootValues.concat(`"subtle-border": "fade(${root.subtleBorder}, 4%)",\r`) 
  if(!isNullOrEmpty(root.modalOverlay)) rootValues.concat(`"modal-overlay-color": "${convertToRgba(root.modalOverlay, 0.5)}",\r`) 
  if(!isNullOrEmpty(root.textColor)) rootValues.concat(`".text-color": "${root.textColor}",\r`) 
  if(!isNullOrEmpty(root.textAccent)) rootValues.concat(`"text-accent": "${root.textAccent}",\r`) 
  if(!isNullOrEmpty(root.textInverse)) rootValues.concat(`"text-inverse": "${root.textInverse}",\r`)
  if(!isNullOrEmpty(root.linkColor)) rootValues.concat(`"link-color": "${root.linkColor}",\r`) 
  if(!isNullOrEmpty(root.cardShadow)) rootValues.concat(`"card-shadow": "${convertToRgba(root.cardShadow, 0.2)}",\r`) 
  if(!isNullOrEmpty(root.modifiedLine)) rootValues.concat(`"modified-line": "fade(${root.modifiedLine}, 25%)",\r`) 
  if(!isNullOrEmpty(root.unverified)) rootValues.concat(`"unverified": "fade(${root.unverified}, 10%)",\r`) 
  if(!isNullOrEmpty(root.termRepoName)) rootValues.concat(`"terminal__repo-name-color": "${root.termRepoName}",\r`) 
  if(!isNullOrEmpty(root.termRepoBranch)) rootValues.concat(`"terminal__repo-branch-color": "${root.termRepoBranch}",\r`) 
  if(!isNullOrEmpty(root.termRepoTag)) rootValues.concat(`"terminal__repo-tag-color": "${root.termRepoTag}",\r`) 
  if(!isNullOrEmpty(root.termRepoUpstream)) rootValues.concat(`"terminal__repo-upstream-color": "${root.termRepoUpstream}",\r`); 
  return rootValues;  
}

function sanitizeValues(valuesObj){
  let values = "";
   if(!isNullOrEmpty(valuesObj.textSelected)) values.concat(`"text-selected": "${convertToRgba(valuesObj.textSelected, 1)}",\r`); 
   if(!isNullOrEmpty(valuesObj.textNormal)) values.concat(`"text-normal": "${convertToRgba(valuesObj.textNormal, 0.9)}",\r`); 
   if(!isNullOrEmpty(valuesObj.textSecondary)) values.concat(`"text-secondary": "${convertToRgba(valuesObj.textSecondary, 0.6)}",\r`); 
   if(!isNullOrEmpty(valuesObj.textDisabled)) values.concat(`"text-disabled": "${convertToRgba(valuesObj.textDisabled, 0.4)}",\r`); 
   if(!isNullOrEmpty(valuesObj.sectionBorder)) values.concat(`"section-border": "${convertToRgba(valuesObj.sectionBorder, 0.2)}",\r`); 
   if(!isNullOrEmpty(valuesObj.input__bg)) values.concat(`"input__bg": "${convertToRgba(valuesObj.input__bg, 0.2)}",\r`); 
   if(!isNullOrEmpty(valuesObj.linkColor)) values.concat(`"link-color": "${convertToRgba(valuesObj.linkColor)}",\r`); 
  return values;
}


export function formatThemeFile(theme){
    const {meta, themeValues} = theme
    const {toolbar, tabsbar} = themeValues
        
    const gkTheme = `
{
  "meta": {
    "name": "${isNullOrEmpty(meta.name) ? "custom-theme" : meta.name}",
    "scheme": "${meta.scheme}"
  },
  "themeValues": {
    "root": {
      ${sanitizeRootValues(themeValues.root)}
      "toolbar__bg0": "lighten(saturate(@app__bg0, 3%), 6%)",
      "toolbar__bg1": "lighten(@toolbar__bg0, 4%)",
      "toolbar__bg2": "lighten(@toolbar__bg1, 6%)",
      "panel__bg0": "lighten(@app__bg0, 5%)",
      "panel__bg1": "lighten(@panel__bg0, 5%)",
      "panel__bg2": "lighten(@panel__bg1, 5%)",
      "input__bg": "fade(#000000, 20%)",
      "input-bg-warn-color": "fade(@orange, 60%)",
      "panel-border": "darken(@app__bg0, 4%)",
      "text-selected": "@.text-color",
      "text-normal": "fade(@.text-color, 75%)",
      "text-secondary": "fade(@.text-color, 60%)",
      "text-disabled": "fade(@.text-color, 40%)",
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
      "form-control-focus": "@blue",
      "code-bg": "@app__bg0",
      "scroll-thumb-border": "@app__bg0",
      "scroll-thumb-bg": "@toolbar__bg2",
      "scroll-thumb-bg-light": "lighten(@toolbar__bg2, 20%)",
      "wip-status": "fade(@blue, 40%)",
      "card__bg": "@panel__bg2",
      "filtering": "fade(@blue, 50%)",
      "soloing": "fade(@orange, 50%)",
      "checked-out": "fade(@green, 30%)",
      "soloed": "fade(@orange, 30%)",
      "added-line": "fade(@green, 20%)",
      "deleted-line": "fade(@red, 20%)",
      "filter-match": "fade(@blue, 50%)",
      "clone__progress": "fade(@blue, 70%)",
      "toolbar__prompt": "fade(@blue, 20%)",
      "verified": "fade(@green, 30%)",
      "drop-sort-border": "@green"
    },
    "toolbar": {
      ${sanitizeValues(toolbar)}
      "btn-text": "var(--text-normal)"
    },
    "tabsbar": {
      ${sanitizeValues(tabsbar)}
      "btn-text": "var(--text-normal)"
    }
  }
}`;
    return JSON.parse(JSON.stringify(gkTheme));
}

export function getThemeFile(themeJson, fileName){
    const file = new File([themeJson], fileName ,{type: 'application/json'})
    const fileURL = URL.createObjectURL(file);

    return fileURL;
}

