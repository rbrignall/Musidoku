<script>
	import { modal } from '@sudoku/stores/modal';
	export let hideModal;
    export let data = {};

</script>


<div class="mt-3">

<p class="pb-4 text-base">Musidoku® is a musical variation of the classic Sudoku number-place puzzle.</p>

<h2 class="text-xl font-semibold mb-2 leading-none">How to play</h2>
<p class="pb-2 text-sm">The rules are simple: Just complete the empty boxes in the grid so that every row, every column and every 3 x 3 box contains one of each of the nine musical symbols.</p>

<p class="pb-2 text-sm">The repertoire choices (levels of difficulty) include <i>Tuning Up</i>, <i>Moderato</i>, <i>Rigoroso</i> and <i>Virtuoso</i>. Check out Settings to tweak your instrument with Hints and even a Timer for your performance.</p>

<p class="pb-2 text-sm">Puzzles can be shared, so why not challenge your friends to see who is the greatest Musidokist in the band/choir/orchestra? And if you're looking for a birthday or Christmas stocking-filler, perhaps you might like one of our two hugely popular puzzle books — available in all good music shops, or directly <a href="https://stainer.co.uk/musidoku/" target="_blank" class="text-red-700 hover:text-blue-600">from the publisher</a>.</p>
    <div class="flex justify-end">
        <button class="btn btn-small mr-3" on:click={hideModal}>Close</button>
    </div>
</div>