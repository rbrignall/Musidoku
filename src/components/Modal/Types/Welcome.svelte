<script>
	import { difficulty as difficultyStore } from '@sudoku/stores/difficulty';
	import { startNew, startCustom, loadFromStorage } from '@sudoku/game';
	import { validateSencode } from '@sudoku/sencode';
	import { DIFFICULTIES } from '@sudoku/constants';
	export let data = {};
	export let hideModal;

	let difficulty = $difficultyStore;
	let sencode = data.sencode || '';
    let loadAvailable = localStorage.getItem("grid") && localStorage.getItem("usergrid") && localStorage.getItem("timer") && localStorage.getItem("hints") && localStorage.getItem("usedhints");

	$: enteredSencode = sencode.trim().length !== 0;
	$: buttonDisabled = enteredSencode ? !validateSencode(sencode) : !DIFFICULTIES.hasOwnProperty(difficulty);

	function handleStart() {
		if (validateSencode(sencode)) {
			startCustom(sencode);
		} else {
			startNew(difficulty);
		}

		hideModal();
	}
    function handleLoad() {
        let loadResult = loadFromStorage($difficultyStore);
        if(loadResult) 
          hideModal()
        else {
          // TODO
          console.log(loadResult);
		}
    }
</script>

<h1 class="text-3xl font-semibold mb-6 leading-none">Welcome!</h1>
<div class="text-lg mb-3">Musidoku® is a musical variation of the classic Sudoku number-place puzzle.</div>

{#if loadAvailable}
<div class="text-lg mb-1">Click "load" to resume your previous game.</div>
<div class="flex justify-end mb-3">
    <button class="btn btn-small btn-primary" disabled={buttonDisabled} on:click={handleLoad}>Load</button>
</div>
{/if}

{#if data.sencode}
	<div class="p-3 text-lg rounded bg-primary bg-opacity-25 border-l-8 border-primary border-opacity-75 mb-4">
		Someone shared a Musidoku® puzzle with you!<br>Click start to play
	</div>
{/if}

<label for="difficulty" class="text-lg mb-3">To start a new game, choose a difficulty:</label>

<div class="inline-block relative mb-4">
	<select id="difficulty" class="btn btn-small w-full appearance-none leading-normal" bind:value={difficulty} disabled={enteredSencode}>
		{#each Object.entries(DIFFICULTIES) as [difficultyValue, difficultyLabel]}
			<option value={difficultyValue}>{difficultyLabel}</option>
		{/each}
	</select>

	<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
		<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
			<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
		</svg>
	</div>
</div>

<label for="sencode" class="text-lg mb-3">Or enter a code for an existing Musidoku® puzzle:</label>

<input id="sencode" class="input font-mono text-sm mb-4" bind:value={sencode} type="text" placeholder="Enter custom code here">

<div class="flex justify-end">
	<button class="btn btn-small btn-primary" disabled={buttonDisabled} on:click={handleStart}>Start</button>
</div>