<script>
	import Buttons from './Buttons.svelte';
	import Dropdown from './Dropdown.svelte';
</script>

<div class="px-2 py-2 flex justify-center text-white">
	<div class="w-full max-w-xl">

		<nav class="grid grid-cols-3 items-center">
			<Dropdown />
            <h1 class="justify-self-center">Musidoku®</h1>
			<Buttons />
		</nav>

	</div>
</div>

<style>
    h1 {
        @apply text-lg block px-2 py-2 text-white font-bold xs:text-xl sm:text-2xl sm:px-4;
    }

</style>