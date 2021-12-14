<script>
	let isChecked = false;
	
</script>

<form class="bg-white w-3/4">

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
	<h2 class="text-gray-800 font-semibold block my-3 text-md border-b-2">Theme Values</h2>
	<p>Root Values</p>
	<div class="flex gap-x-3">
		
		<div class="flex gap-x-2 items-center">
			<label class="text-gray-800 font-semibold block my-3 text-md" for="themeType">Red</label>
			<input type="color" class="w-12 bg-gray-100 px-4 py-2 focus:outline-none" />
			<input type="text" name="red" id="">
		</div>
		<div class="flex gap-x-2">
			<label class="text-gray-800 font-semibold block my-3 text-md" for="themeType">Red</label>
			<input type="color" class="w-12 bg-gray-100 px-4 py-2 focus:outline-none" />

		</div>
	</div>
	<p>Toolbar</p>
	<p>Tabsbar</p>
	<button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
</form>