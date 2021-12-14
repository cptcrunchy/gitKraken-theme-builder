<script>
	export let fieldTitle;
	export let fieldName;
	export let fieldValue;
</script>

<div class="flex flex-col gap-x-2 items-start">
	<label class="text-gray-800 font-semibold block my-3 text-sm" for="rootOrange">{fieldTitle}</label>
	<div class="flex">
		<input type="color" class="w-14 h-8 p-0 focus:outline-none" bind:value={fieldValue} />
		<input type="text" class="w-20 border px-2 focus:outline-none" name={fieldName} id={fieldName} bind:value={fieldValue}>
	</div>
</div>