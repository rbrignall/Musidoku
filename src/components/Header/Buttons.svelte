<script>
	import { modal } from '@sudoku/stores/modal';
	import { pauseGame, resumeGame } from '@sudoku/game';
	import { slide, fade } from 'svelte/transition';
	import { DROPDOWN_DURATION } from '@sudoku/constants';

	function handleShareButton() {
		pauseGame();
		modal.show('share', { onHide: resumeGame });
	}

	function handleSettingsButton() {
		pauseGame();
		modal.show('settings', { onHide: resumeGame });
	}
    
    	let dropdownVisible = false;

	function showDropdown() {
		pauseGame();
		dropdownVisible = true;
	}

	function hideDropdown() {
		dropdownVisible = false;
		setTimeout(resumeGame, DROPDOWN_DURATION);
	}

</script>

<div class="flex justify-evenly space-x-3">

	<button class="btn btn-header" title="Share this Musidoku® puzzle" on:click={handleShareButton}>
		<svg class="icon-outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
		</svg>
	</button>

	<button class="btn btn-header" title="Open Settings" on:click={handleSettingsButton}>
		<svg class="icon-outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
		</svg>
	</button>

	<button class="dropdown-button" on:click={dropdownVisible ? hideDropdown : showDropdown} title="{dropdownVisible ? 'Close' : 'Open'} Menu">
		<svg class="icon-outline mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="butt" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>

	{#if dropdownVisible}
		<button transition:fade={{duration: DROPDOWN_DURATION}} class="dropdown-overlay" on:click={hideDropdown} tabindex="-1"></button>

		<div transition:slide={{duration: DROPDOWN_DURATION}} class="dropdown-menu">
				<a class="dropdown-item" href="../index.html" title="Homepage">
					<svg class="icon-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
					</svg>
					<span class="align-middle">Home</span>
				</a>
				<a class="dropdown-item" href="../books.html" title="Books">
					<svg class="icon-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
					</svg>
					<span class="align-middle">Books</span>
				</a>
				<a class="dropdown-item" href="../about.html" title="About Musidoku">
					<svg class="icon-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
					</svg>
					<span class="align-middle">About</span>
				</a>
				<a class="dropdown-item" href="../help.html" title="How to play">
					<svg class="icon-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
					</svg>
					<span class="align-middle">Help</span>
				</a>


		</div>
	{/if}
</div>



<style>
	.btn-header {
		@apply bg-white bg-opacity-0 transition-opacity p-1 border-0;
	}

	.btn-header:hover {
		@apply bg-primary-dark;
	}

	.btn-header:active {
		@apply bg-opacity-50;
	}

	.btn-header:focus {
		@apply shadow-outline-inverse;
	}
    
    .dropdown-overlay {
		@apply fixed z-20 inset-0 h-full w-full bg-black bg-opacity-50 outline-none cursor-default;
	}

	.dropdown-menu {
		@apply absolute z-30 left-1/2 top-10 mt-2 py-2 w-40 bg-white rounded-b-lg shadow-xl;
	}


	.dropdown-item {
		@apply block px-4 py-2 text-gray-800 transition-colors duration-100 text-base tracking-wide;
	}

	.dropdown-item:hover {
		@apply bg-primary text-white;
	}

	.dropdown-item:active {
		@apply bg-primary-dark;
	}
</style>