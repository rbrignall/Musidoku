<script>
	import { CANDIDATE_COORDS } from '@sudoku/constants';

	export let candidates = [];
    const musicsymbol = ["","𝄞","𝄢","𝅗𝅥","𝅘𝅥","𝅘𝅥𝅮","𝅘𝅥𝅯","♯","♭","𝄐"];

</script>

<div class="candidate-grid">
	{#each CANDIDATE_COORDS as [row, col], index}
		<div class="candidate row-start-{row} col-start-{col}"
		     class:invisible={!candidates.includes(index + 1)}
		     class:visible={candidates.includes(index + 1)}>
			{musicsymbol[index + 1]}
		</div>
	{/each}
</div>

<style>
	.candidate-grid {
		@apply grid h-full w-full p-1 grid-cols-3;
	}

	.candidate {
		@apply h-full w-full row-end-auto col-end-auto leading-full;
        font-family: 'Noto Music';
	}
</style>