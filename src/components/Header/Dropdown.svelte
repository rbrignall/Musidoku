<script>
	import game from '@sudoku/game';
	import { validateSencode } from '@sudoku/sencode';
	import { modal } from '@sudoku/stores/modal';
	import { slide, fade } from 'svelte/transition';
	import { DIFFICULTIES, DROPDOWN_DURATION, DIFFICULTY_CUSTOM } from '@sudoku/constants';
	import { difficulty } from '@sudoku/stores/difficulty';
    
	let dropdownVisible = false;

	function handleDifficulty(difficultyValue) {
		dropdownVisible = false;
		game.pause();

		modal.show('confirm', {
			title: 'New Game',
			text: 'Start new game with difficulty "' + DIFFICULTIES[difficultyValue] + '"?',
			button: 'Continue',
			onHide: game.resume,
			callback: () => {
				game.startNew(difficultyValue);
			},
		});
	}

	function handleCreateOwn() {
		dropdownVisible = false;
		game.pause();

		modal.show('confirm', {
			title: 'Create Own',
			text: 'Switch to the creator mode to create your own Musidoku® puzzle?',
			button: 'Continue',
			onHide: game.resume,
			callback: () => {
				//game.startCreatorMode();
			},
		});
	}

	function handleEnterCode() {
		dropdownVisible = false;
		game.pause();

		modal.show('prompt', {
			title: 'Enter Code',
			text: 'Enter a code for a Musidoku® puzzle:',
			fontMono: true,
			button: 'Start',
			onHide: game.resume,
			callback: (value) => {
				game.startCustom(value);
			},
			validate: validateSencode
		});
	}

	function showDropdown() {
		dropdownVisible = true;
		game.pause();
	}

	function hideDropdown() {
		dropdownVisible = false;
		setTimeout(game.resume, DROPDOWN_DURATION);
	}
</script>

<div class="dropdown">
	<button class="dropdown-button" on:click={dropdownVisible ? hideDropdown : showDropdown} title="{dropdownVisible ? 'Close' : 'Open'} Menu">
		<svg class="icon-outline mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="butt" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
		</svg>

		<span class="text-sm sm:text-lg tracking-wider">{$difficulty === DIFFICULTY_CUSTOM ? 'Custom' : DIFFICULTIES[$difficulty]}</span>
	</button>

	{#if dropdownVisible}
		<button transition:fade={{duration: DROPDOWN_DURATION}} class="dropdown-overlay" on:click={hideDropdown} tabindex="-1"></button>

		<div transition:slide={{duration: DROPDOWN_DURATION}} class="dropdown-menu">
			{#each Object.entries(DIFFICULTIES) as [difficultyValue, difficultyLabel]}
				<a class="dropdown-item" on:click|preventDefault={() => handleDifficulty(difficultyValue)} href="/difficulty-{difficultyValue}" title="Set difficulty to '{difficultyLabel}'">
					<svg class="icon-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
					</svg>

					<span class="align-middle">{difficultyLabel}</span>
				</a>
			{/each}

			<hr class="my-1">
<!--
			<a class="dropdown-item" on:click|preventDefault={handleCreateOwn} href="/create" title="Create your own Musidoku® puzzle">
				<svg class="icon-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
				</svg>

				<span class="align-middle">Create Own</span>
			</a>
-->
			<a class="dropdown-item" on:click|preventDefault={handleEnterCode} href="/enter-code" title="Enter a Musidoku® puzzle code">
				<svg class="icon-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
					<path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
				</svg>

				<span class="align-middle">Enter Code</span>
			</a>
		</div>
	{/if}
</div>

<style>
	.dropdown {
		@apply relative;
	}

	.dropdown-button {
		@apply relative z-30 block flex outline-none items-center text-sm sm:text-xl;
	}

	.dropdown-overlay {
		@apply fixed z-20 inset-0 h-full w-full bg-black bg-opacity-50 outline-none cursor-default;
	}

	.dropdown-menu {
		@apply absolute z-30 left-0 mt-2 py-2 w-40 bg-white rounded-b-lg shadow-xl;
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