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

	function handleHelpButton() {
		pauseGame();
		modal.show('help', { onHide: resumeGame });
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

<div class="justify-self-end flex justify-evenly space-x-3">




	<button class="dropdown-button" on:click={dropdownVisible ? hideDropdown : showDropdown} title="{dropdownVisible ? 'Close' : 'Open'} Menu">
		<svg class="icon-outline mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="butt" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</button>

	{#if dropdownVisible}
		<button transition:fade={{duration: DROPDOWN_DURATION}} class="dropdown-overlay" on:click={hideDropdown} tabindex="-1"></button>

		<div transition:slide={{duration: DROPDOWN_DURATION}} class="dropdown-menu">
	            <a class="dropdown-item" href="https://stainer.co.uk/musidoku/" title="Buy the books" target="_blank">
					<svg class="icon-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 24" width=20 fill="currentColor">
						<path fill-rule="evenodd" d="M25.714 10.286h.027c.465 0 .885.192 1.185.502c.31.301.502.721.502 1.186v.028v-.001v.027c0 .465-.192.885-.502 1.185c-.301.31-.721.502-1.186.502h-.028h.001h-.201l-1.541 8.869a1.655 1.655 0 0 1-.587 1.015l-.003.002c-.29.249-.67.401-1.085.401H5.129c-.415 0-.795-.152-1.087-.403l.002.002a1.654 1.654 0 0 1-.588-1.008l-.001-.01l-1.541-8.869h-.228c-.465 0-.885-.192-1.185-.502a1.647 1.647 0 0 1-.502-1.186v-.054c0-.465.192-.885.502-1.185c.301-.31.721-.502 1.186-.502h.028h-.001zM6.491 21a.823.823 0 0 0 .581-.3l.001-.001a.823.823 0 0 0 .208-.626v.003l-.429-5.572a.823.823 0 0 0-.3-.581l-.001-.001a.823.823 0 0 0-.626-.208h.003a.823.823 0 0 0-.581.3l-.001.001a.823.823 0 0 0-.208.626v-.003l.429 5.572a.827.827 0 0 0 .274.562l.001.001a.83.83 0 0 0 .572.228h.011h-.001zm5.505-.856v-5.58a.816.816 0 0 0-.254-.594a.82.82 0 0 0-.595-.254h-.016a.816.816 0 0 0-.594.254a.82.82 0 0 0-.254.595v5.588c0 .234.097.445.254.594a.82.82 0 0 0 .595.254h.016a.816.816 0 0 0 .594-.254a.82.82 0 0 0 .258-.598v-.006zm5.143 0v-5.58a.816.816 0 0 0-.254-.594a.82.82 0 0 0-.595-.254h-.016a.816.816 0 0 0-.594.254a.82.82 0 0 0-.254.595v5.588c0 .234.097.445.254.594a.82.82 0 0 0 .595.254h.016a.816.816 0 0 0 .594-.254a.82.82 0 0 0 .258-.598v-.006zm4.714.066l.429-5.572a.83.83 0 0 0-.208-.624l.001.001a.826.826 0 0 0-.58-.302h-.003a.83.83 0 0 0-.624.208l.001-.001a.826.826 0 0 0-.302.58v.003l-.429 5.572a.83.83 0 0 0 .208.624l-.001-.001a.826.826 0 0 0 .58.302h.08a.834.834 0 0 0 .573-.228a.83.83 0 0 0 .279-.564v-.003zM6.375 3.91L5.13 9.428H3.362l1.352-5.906c.163-.785.59-1.45 1.182-1.915l.007-.005A3.332 3.332 0 0 1 8.01.858h.038h-.002h2.236V.85c0-.234.097-.445.254-.594a.821.821 0 0 1 .596-.255h5.162c.234 0 .445.097.594.254a.82.82 0 0 1 .254.595v.008h2.273c.801 0 1.536.28 2.112.748l-.006-.005A3.262 3.262 0 0 1 22.706 3.5l.004.021l1.352 5.906h-1.768l-1.245-5.518a1.767 1.767 0 0 0-.606-.962l-.003-.003a1.638 1.638 0 0 0-1.046-.375h-2.255v.008a.816.816 0 0 1-.254.594a.82.82 0 0 1-.595.254h-5.158a.816.816 0 0 1-.594-.254a.82.82 0 0 1-.254-.595v-.008H8.029a1.64 1.64 0 0 0-1.048.377l.003-.002a1.76 1.76 0 0 0-.603.954l-.002.012z" clip-rule="evenodd" />
					</svg>
					<span class="align-middle">Buy Books</span>
				</a>
			    <a class="dropdown-item" on:click|preventDefault={handleHelpButton} href="/help" title="How to play">
					<svg class="icon-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width=20 fill="currentColor">
						<path fill-rule="evenodd" d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm4 8a4 4 0 0 0-8 0h2c0-1.103.897-2 2-2s2 .897 2 2s-.897 2-2 2a1 1 0 0 0-1 1v2h2v-1.141A3.991 3.991 0 0 0 16 10zm-3 6h-2v2h2v-2z" clip-rule="evenodd" />
					</svg>
					<span class="align-middle">Help</span>
				</a>
                <a class="dropdown-item" on:click|preventDefault={handleShareButton} href="/share" title="Share this Musidoku® puzzle">
		            <svg class="icon-outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width=20 stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
					</svg>
					<span class="align-middle">Share</span>
				</a>
			    <a class="dropdown-item" on:click|preventDefault={handleSettingsButton} href="/settings" title="Open Settings">
		          <svg class="icon-outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width=20 stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<span class="align-middle">Settings</span>
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