<script>
	import { gkTheme } from '$lib/theme'
	import { formatThemeFile, getThemeFile } from '$lib/utils'
	import FormField from '$lib/components/formField.svelte'

	let isChecked = false;
	let newGitKrakenTheme = "";
	
	function toggleTheme(){
		isChecked = !isChecked;
		gkTheme.meta.scheme = isChecked ? "dark" : 'light';
	}

	function createTheme(){
		var themeJson = formatThemeFile(gkTheme);
		const theme = getThemeFile(themeJson, gkTheme.meta.name);
		newGitKrakenTheme = theme;
	}

</script>

<form class="bg-white w-full lg:w-11/12">

	<label class="text-gray-800 font-semibold block my-3 text-md" for="themeName">Theme Name</label>
	<input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
		type="text" name="themeName" id="themeName"
		placeholder="GitKraken Dark" bind:value={gkTheme.meta.name} />	
	<label class="text-gray-800 font-semibold block my-3 text-md" for="themeType">Theme Type</label>
	<div for="themeType" class="mt-3 inline-flex items-center cursor-pointer">
		<span class="relative">
			<span class="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
			<span 
				class="{isChecked ? "bg-purple-600 transform translate-x-full" : "bg-white"} absolute block w-4 h-4 mt-1 ml-1  rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out" >
				<input id="checked" type="checkbox" class="absolute opacity-0 w-4 h-4" on:click={toggleTheme} />
			</span>
		</span>
		<span class="ml-3 text-sm">{isChecked ? "Dark" : "Light"} Theme</span>
	</div>
	<h2 class="text-gray-800 font-semibold block my-3 text-lg">Theme Values</h2>
	<h2 class="text-gray-800 font-semibold block my-3 text-md border-b-2">Root Values</h2>
	<div class="flex gap-x-2 flex-wrap justify-start">
		<FormField fieldTitle={"Red"} fieldName={"red"} bind:fieldValue={gkTheme.themeValues.root.red} />
		<FormField fieldTitle={"Orange"} fieldName={"orange"} bind:fieldValue={gkTheme.themeValues.root.orange} />
		<FormField fieldTitle={"Yellow"} fieldName={"yellow"} bind:fieldValue={gkTheme.themeValues.root.yellow} />
		<FormField fieldTitle={"Green"} fieldName={"green"} bind:fieldValue={gkTheme.themeValues.root.green} />
		<FormField fieldTitle={"Blue"} fieldName={"blue"} bind:fieldValue={gkTheme.themeValues.root.blue} />
		<FormField fieldTitle={"Light Blue"} fieldName={"ltblue"} bind:fieldValue={gkTheme.themeValues.root.ltblue} />
		<FormField fieldTitle={"App Bg"} fieldName={"appbg0"} bind:fieldValue={gkTheme.themeValues.root.app__bg0} />
		<FormField fieldTitle={"Input Bg"} fieldName={"inputbg"} bind:fieldValue={gkTheme.themeValues.root.input__bg} />
		<FormField fieldTitle={"Section Border"} fieldName={"sectionborder"} bind:fieldValue={gkTheme.themeValues.root.sectionBorder} />
		<FormField fieldTitle={"Subtle Border"} fieldName={"subtleborder"} bind:fieldValue={gkTheme.themeValues.root.subtleBorder} />
		<FormField fieldTitle={"Modal Overlay"} fieldName={"modaloverlay"} bind:fieldValue={gkTheme.themeValues.root.modalOverlay} />
		<FormField fieldTitle={"Text Color"} fieldName={"textcolor"} bind:fieldValue={gkTheme.themeValues.root.textColor} />
		<FormField fieldTitle={"Text Accent"} fieldName={"textaccent"} bind:fieldValue={gkTheme.themeValues.root.textAccent} />
		<FormField fieldTitle={"Text Inverse"} fieldName={"textinverse"} bind:fieldValue={gkTheme.themeValues.root.textInverse} />
		<FormField fieldTitle={"Unverified"} fieldName={"unverified"} bind:fieldValue={gkTheme.themeValues.root.unverified} />
		<FormField fieldTitle={"Link Color"} fieldName={"linkcolor"} bind:fieldValue={gkTheme.themeValues.root.linkColor} />
		<FormField fieldTitle={"Card Shadow"} fieldName={"cardshadow"} bind:fieldValue={gkTheme.themeValues.root.cardShadow} />
		<FormField fieldTitle={"Modified Line"} fieldName={"modifiedline"} bind:fieldValue={gkTheme.themeValues.root.modifiedLine} />
		<FormField fieldTitle={"Terminal Repo Name"} fieldName={"termreponame"} bind:fieldValue={gkTheme.themeValues.root.termRepoName} />
		<FormField fieldTitle={"Terminal Repo Branch"} fieldName={"termrepobranch"} bind:fieldValue={gkTheme.themeValues.root.termRepoBranch} />
		<FormField fieldTitle={"Terminal Repo Tag"} fieldName={"termrepotag"} bind:fieldValue={gkTheme.themeValues.root.termRepoTag} />
		<FormField fieldTitle={"Terminal Repo Upstream"} fieldName={"termrepoupstream"} bind:fieldValue={gkTheme.themeValues.root.termRepoUpstream} />
	</div>
	<h2 class="text-gray-800 font-semibold block my-3 text-md border-b-2">Tool bar</h2>
	<div class="flex gap-x-2 flex-wrap justify-start">
		<FormField fieldTitle={"Text Selected"} fieldName={"toolbartxtselected"} bind:fieldValue={gkTheme.themeValues.toolbar.textSelected} />
		<FormField fieldTitle={"Text Normal"} fieldName={"toolbartxtnoraml"} bind:fieldValue={gkTheme.themeValues.toolbar.textNormal} />
		<FormField fieldTitle={"Text Secondary"} fieldName={"toolbartxtsecondary"} bind:fieldValue={gkTheme.themeValues.toolbar.textSecondary} />
		<FormField fieldTitle={"Text Disabled"} fieldName={"toolbartxtdisabled"} bind:fieldValue={gkTheme.themeValues.toolbar.textDisabled} />
		<FormField fieldTitle={"Section Border"} fieldName={"sectionborder"} bind:fieldValue={gkTheme.themeValues.toolbar.sectionBorder} />
		<FormField fieldTitle={"Input Bg"} fieldName={"toolbarinputbg"} bind:fieldValue={gkTheme.themeValues.toolbar.input__bg} />
		<FormField fieldTitle={"Link Color"} fieldName={"toolbarlinkcolor"} bind:fieldValue={gkTheme.themeValues.toolbar.linkColor} />
	</div>
	<h2 class="text-gray-800 font-semibold block my-3 text-md border-b-2">Tabs bar</h2>
	<div class="flex gap-x-2 flex-wrap justify-start">
		<FormField fieldTitle={"Text Selected"} fieldName={"tabsbartxtselected"} bind:fieldValue={gkTheme.themeValues.tabsbar.textSelected} />
		<FormField fieldTitle={"Text Normal"} fieldName={"tabsbartxtnoraml"} bind:fieldValue={gkTheme.themeValues.tabsbar.textNormal} />
		<FormField fieldTitle={"Text Secondary"} fieldName={"tabsbartxtsecondary"} bind:fieldValue={gkTheme.themeValues.tabsbar.textSecondary} />
		<FormField fieldTitle={"Text Disabled"} fieldName={"tabsbartxtdisabled"} bind:fieldValue={gkTheme.themeValues.tabsbar.textDisabled} />
		<FormField fieldTitle={"Section Border"} fieldName={"sectionborder"} bind:fieldValue={gkTheme.themeValues.tabsbar.sectionBorder} />
		<FormField fieldTitle={"Input Bg"} fieldName={"tabsbarinputbg"} bind:fieldValue={gkTheme.themeValues.tabsbar.input__bg} />
		<FormField fieldTitle={"Link Color"} fieldName={"tabsbarlinkcolor"} bind:fieldValue={gkTheme.themeValues.tabsbar.linkColor} />
	</div>
	<button type="submit" on:click|preventDefault={createTheme} class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Create Theme</button>
</form>
{#if newGitKrakenTheme !== ""}
	<a type="button" download="{gkTheme.meta.name}" href="{newGitKrakenTheme}"
		class="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">Download Theme</a>
{/if}