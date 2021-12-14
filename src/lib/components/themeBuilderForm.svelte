<script>
	import FormField from '$lib/components/formField.svelte'
	let isChecked = false;
	let fieldValue = "";
	$:console.log()
</script>

<form class="bg-white w-full lg:w-11/12">

	<label class="text-gray-800 font-semibold block my-3 text-md" for="themeName">Theme Name</label>
	<input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="GitKraken Dark" />	
	<label class="text-gray-800 font-semibold block my-3 text-md" for="themeType">Theme Type</label>
	<div for="themeType" class="mt-3 inline-flex items-center cursor-pointer">
		<span class="relative">
			<span class="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
			<span 
				class="{isChecked ? "bg-purple-600 transform translate-x-full" : "bg-white"} absolute block w-4 h-4 mt-1 ml-1  rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out" >
				<input id="checked" type="checkbox" class="absolute opacity-0 w-4 h-4" on:click={() => isChecked = !isChecked} />
			</span>
		</span>
		<span class="ml-3 text-sm">{isChecked ? "Dark" : "Light"} Theme</span>
	</div>
	<h2 class="text-gray-800 font-semibold block my-3 text-lg">Theme Values</h2>
	<h2 class="text-gray-800 font-semibold block my-3 text-md border-b-2">Root Values</h2>
	<div class="flex gap-x-2 flex-wrap justify-start">
		<FormField fieldTitle={"Red"} fieldName={"red"} bind:fieldValue={fieldValue} />
		<FormField fieldTitle={"Orange"} fieldName={"orange"} />
		<FormField fieldTitle={"Yellow"} fieldName={"yellow"} />
		<FormField fieldTitle={"Green"} fieldName={"green"} />
		<FormField fieldTitle={"Blue"} fieldName={"blue"} />
		<FormField fieldTitle={"Light Blue"} fieldName={"ltblue"} />
		<FormField fieldTitle={"App Bg"} fieldName={"appbg0"} />
		<FormField fieldTitle={"Input Bg"} fieldName={"inputbg"} />
		<FormField fieldTitle={"Input Bg Warning"} fieldName={"inputbgwarncolor"} />
		<FormField fieldTitle={"Tool Bar Bg"} fieldName={"toolbarbg0"} />
		<FormField fieldTitle={"Panel Bg"} fieldName={"panelbg0"} />
		<FormField fieldTitle={"Panel Border"} fieldName={"panelborder"} />
		<FormField fieldTitle={"Section Border"} fieldName={"sectionborder"} />
		<FormField fieldTitle={"Subtle Border"} fieldName={"subtleborder"} />
		<FormField fieldTitle={"Modal Overlay"} fieldName={"modaloverlay"} />
		<FormField fieldTitle={"Text Color"} fieldName={"textcolor"} />
		<FormField fieldTitle={"Text Accent"} fieldName={"textaccent"} />
		<FormField fieldTitle={"Text Inverse"} fieldName={"textinverse"} />
		<FormField fieldTitle={"Link Color"} fieldName={"linkcolor"} />
		<FormField fieldTitle={"Terminal Repo Name"} fieldName={"termreponame"} />
		<FormField fieldTitle={"Terminal Repo Branch"} fieldName={"termrepobranch"} />
		<FormField fieldTitle={"Terminal Repo Tag"} fieldName={"termrepotag"} />
		<FormField fieldTitle={"Terminal Repo Upstream"} fieldName={"termrepoupstream"} />
	</div>
	<h2 class="text-gray-800 font-semibold block my-3 text-md border-b-2">Tool bar</h2>
	<div class="flex gap-x-2 flex-wrap justify-start">
		<FormField fieldTitle={"Text Selected"} fieldName={"toolbartxtselected"} />
		<FormField fieldTitle={"Text Normal"} fieldName={"toolbartxtnoraml"} />
		<FormField fieldTitle={"Text Secondary"} fieldName={"toolbartxtsecondary"} />
		<FormField fieldTitle={"Text Disabled"} fieldName={"toolbartxtdisabled"} />
		<FormField fieldTitle={"Input Bg"} fieldName={"toolbarinputbg"} />
		<FormField fieldTitle={"Link Color"} fieldName={"toolbarlinkcolor"} />
	</div>
	<h2 class="text-gray-800 font-semibold block my-3 text-md border-b-2">Tabs bar</h2>
	<div class="flex gap-x-2 flex-wrap justify-start">
		<FormField fieldTitle={"Text Selected"} fieldName={"tabsbartxtselected"} />
		<FormField fieldTitle={"Text Normal"} fieldName={"tabsbartxtnoraml"} />
		<FormField fieldTitle={"Text Secondary"} fieldName={"tabsbartxtsecondary"} />
		<FormField fieldTitle={"Text Disabled"} fieldName={"tabsbartxtdisabled"} />
		<FormField fieldTitle={"Input Bg"} fieldName={"tabsbarinputbg"} />
		<FormField fieldTitle={"Link Color"} fieldName={"tabsbarlinkcolor"} />
	</div>
	<button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Create Theme</button>
</form>