<script>
	import Buttons from './Buttons.svelte';
	import Dropdown from './Dropdown.svelte';
</script>

<div class="px-2 py-2 flex justify-center text-white">
	<div class="w-full max-w-xl">

		<nav class="flex flex-wrap items-center justify-between">
			<Dropdown />
            <h1><a href="https://www.musidoku.com/">Musidoku®</a></h1>
			<Buttons />
		</nav>

	</div>
</div>

<style>
    h1 {
        @apply text-lg block px-2 py-2 text-white font-bold xs:text-xl sm:text-2xl sm:px-4;
    }

</style>