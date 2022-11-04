<script>
	import { DIFFICULTIES, DIFFICULTY_CUSTOM, GAME_OVER_CELEBRATIONS } from '@sudoku/constants';
	import { resumeGame } from '@sudoku/game';
	import { modal } from '@sudoku/stores/modal';
	import { timer } from '@sudoku/stores/timer';
	import { difficulty } from '@sudoku/stores/difficulty';
	import { usedHints } from '@sudoku/stores/hints';

	const gameOverCelebration = GAME_OVER_CELEBRATIONS[Math.floor(Math.random() * GAME_OVER_CELEBRATIONS.length)];

	function handleShare() {
		modal.show('share', { onHide: () => modal.show('gameover'), onHideReplace: true });
	}

	function handleNewGame() {
		modal.show('welcome', { onHide: resumeGame });
	}
</script>

<div class="flex flex-col text-center items-center">
<!--
	<svg class="h-32 w-32 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path d="M1 6.417c0-1.013.822-1.833 1.834-1.833 1.215 0 2.104 1.167 1.763 2.329-.559 1.915 5.827 3.731 6.771-1.471.239-1.323-.021-1.67-.668-2.321-.329-.329-.534-.783-.534-1.287 0-1.013.822-1.834 1.834-1.834 1.014 0 1.833.821 1.833 1.833 0 .504-.204.958-.533 1.287-.646.65-.905.998-.666 2.321.941 5.2 7.33 3.387 6.77 1.471-.339-1.162.548-2.329 1.764-2.329 1.012 0 1.832.821 1.832 1.834 0 1.118-.992 1.97-2.084 1.816-1.32-.187-3.03 4.554-3.417 6.716-1.765-.615-3.618-.942-5.493-.949-1.875.006-3.74.334-5.504.949-.388-2.162-2.098-6.903-3.418-6.717-1.092.155-2.084-.697-2.084-1.815zm-1 14.583h2.359l.566 3c.613-1.012 1.388-1.912 2.277-2.68l-2.342-3.335c-1.089.879-2.053 1.848-2.86 3.015zm24 0h-2.359l-.566 3c-.613-1.012-1.388-1.912-2.277-2.68l2.343-3.335c1.088.879 2.052 1.848 2.859 3.015zm-12-4.998c-2.845.009-5.491.825-7.757 2.211l2.334 3.322c1.603-.924 3.448-1.464 5.423-1.473 1.975.009 3.82.549 5.423 1.473l2.334-3.322c-2.266-1.386-4.912-2.202-7.757-2.211zm-3.022 3.498l-.65-.348-.651.348.131-.726-.531-.511.729-.101.321-.662.322.663.729.101-.53.511.13.725zm3.672-.5l-.65-.348-.65.348.131-.726-.531-.511.729-.101.321-.662.322.663.729.101-.53.511.129.725zm3.718.5l-.65-.348-.65.348.131-.726-.531-.511.729-.101.322-.663.322.663.729.101-.53.511.128.726z" />
	</svg>
-->
	<h1 class="text-4xl font-semibold">{gameOverCelebration}</h1>
</div>

<div class="game-data space-y-2">
	<div class="game-data-item">
		<div class="item-icon">
			<svg class="icon-outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		</div>

		<div class="item-data">
			<div class="item-data-label">
				Time:
			</div>

			<div class="item-data-value">
				{$timer}
			</div>
		</div>
	</div>

	<div class="game-data-item">
		<div class="item-icon">
			<svg class="icon-outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
			</svg>
		</div>

		<div class="item-data">
			<div class="item-data-label">
				Difficulty:
			</div>

			<div class="item-data-value">
				{$difficulty === DIFFICULTY_CUSTOM ? 'Custom' : DIFFICULTIES[$difficulty]}
			</div>
		</div>
	</div>

	<div class="game-data-item">
		<div class="item-icon">
			<svg class="icon-outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
			</svg>
		</div>

		<div class="item-data">
			<div class="item-data-label">
				Hints used:
			</div>

			<div class="item-data-value">
				{$usedHints}
			</div>
		</div>
	</div>
</div>

<button class="btn btn-small w-full mb-2" on:click={handleShare}>
    <svg class="icon-outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
    &nbsp;Share this Musidoku® puzzle
</button>
<a href="../books.html" class="btn btn-small w-full mb-2">
    <svg class="icon-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 24" width=20 fill="currentColor">
        <path fill-rule="evenodd" d="M25.714 10.286h.027c.465 0 .885.192 1.185.502c.31.301.502.721.502 1.186v.028v-.001v.027c0 .465-.192.885-.502 1.185c-.301.31-.721.502-1.186.502h-.028h.001h-.201l-1.541 8.869a1.655 1.655 0 0 1-.587 1.015l-.003.002c-.29.249-.67.401-1.085.401H5.129c-.415 0-.795-.152-1.087-.403l.002.002a1.654 1.654 0 0 1-.588-1.008l-.001-.01l-1.541-8.869h-.228c-.465 0-.885-.192-1.185-.502a1.647 1.647 0 0 1-.502-1.186v-.054c0-.465.192-.885.502-1.185c.301-.31.721-.502 1.186-.502h.028h-.001zM6.491 21a.823.823 0 0 0 .581-.3l.001-.001a.823.823 0 0 0 .208-.626v.003l-.429-5.572a.823.823 0 0 0-.3-.581l-.001-.001a.823.823 0 0 0-.626-.208h.003a.823.823 0 0 0-.581.3l-.001.001a.823.823 0 0 0-.208.626v-.003l.429 5.572a.827.827 0 0 0 .274.562l.001.001a.83.83 0 0 0 .572.228h.011h-.001zm5.505-.856v-5.58a.816.816 0 0 0-.254-.594a.82.82 0 0 0-.595-.254h-.016a.816.816 0 0 0-.594.254a.82.82 0 0 0-.254.595v5.588c0 .234.097.445.254.594a.82.82 0 0 0 .595.254h.016a.816.816 0 0 0 .594-.254a.82.82 0 0 0 .258-.598v-.006zm5.143 0v-5.58a.816.816 0 0 0-.254-.594a.82.82 0 0 0-.595-.254h-.016a.816.816 0 0 0-.594.254a.82.82 0 0 0-.254.595v5.588c0 .234.097.445.254.594a.82.82 0 0 0 .595.254h.016a.816.816 0 0 0 .594-.254a.82.82 0 0 0 .258-.598v-.006zm4.714.066l.429-5.572a.83.83 0 0 0-.208-.624l.001.001a.826.826 0 0 0-.58-.302h-.003a.83.83 0 0 0-.624.208l.001-.001a.826.826 0 0 0-.302.58v.003l-.429 5.572a.83.83 0 0 0 .208.624l-.001-.001a.826.826 0 0 0 .58.302h.08a.834.834 0 0 0 .573-.228a.83.83 0 0 0 .279-.564v-.003zM6.375 3.91L5.13 9.428H3.362l1.352-5.906c.163-.785.59-1.45 1.182-1.915l.007-.005A3.332 3.332 0 0 1 8.01.858h.038h-.002h2.236V.85c0-.234.097-.445.254-.594a.821.821 0 0 1 .596-.255h5.162c.234 0 .445.097.594.254a.82.82 0 0 1 .254.595v.008h2.273c.801 0 1.536.28 2.112.748l-.006-.005A3.262 3.262 0 0 1 22.706 3.5l.004.021l1.352 5.906h-1.768l-1.245-5.518a1.767 1.767 0 0 0-.606-.962l-.003-.003a1.638 1.638 0 0 0-1.046-.375h-2.255v.008a.816.816 0 0 1-.254.594a.82.82 0 0 1-.595.254h-5.158a.816.816 0 0 1-.594-.254a.82.82 0 0 1-.254-.595v-.008H8.029a1.64 1.64 0 0 0-1.048.377l.003-.002a1.76 1.76 0 0 0-.603.954l-.002.012z" clip-rule="evenodd" />
    </svg>
    &nbsp;Buy Musidoku® books
</a>
<button class="btn btn-small btn-primary w-full" on:click={handleNewGame}>New Game</button>

<style>
	.game-data {
		@apply mt-6 mb-10 w-full text-xl;
	}

	.game-data-item {
		@apply flex;
	}

	.item-icon {
		@apply flex-auto mr-3;
	}

	.item-data {
		@apply flex-grow w-full flex flex-wrap border-b-2 border-gray-300 pb-1;
	}

	.item-data-label {
		@apply w-1/2 text-left;
	}

	.item-data-value {
		@apply w-1/2 text-right;
	}
</style>