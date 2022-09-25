<script>
	import Buttons from './Buttons.svelte';
	import Dropdown from './Dropdown.svelte';
</script>

<div class="px-4 py-4 flex justify-center text-white">
	<div class="w-full max-w-xl">

		<nav class="flex flex-wrap items-center justify-between">
            <h1>Musidoku®</h1>
			<Dropdown />

			<Buttons />
		</nav>

	</div>
</div>

<style>
    h1 {
        @apply text-2xl block px-4 py-2 text-white font-bold;
    }

</style>