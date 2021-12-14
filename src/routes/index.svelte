<script>
	import ThemeTitle from "$lib/components/themeTitle.svelte";
	import ThemeBuilderForm from "$lib/components/themeBuilderForm.svelte";
</script>

<ThemeTitle />

<div class="flex flex-col w-fit sm:w-full lg:w-1/2 sm:px-3 justify-center py-10 items-center bg-white overflow-auto">
	<h1 class="text-gray-800 font-bold text-2xl mb-1">Build your GitKraken Theme!</h1>
	<ThemeBuilderForm />
</div>
