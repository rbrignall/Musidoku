<script>
	import { modal } from '@sudoku/stores/modal';
	export let hideModal;
    export let data = {};

</script>


<div class="mt-3">
<h1 class="text-3xl font-semibold mb-5 leading-none">Uh oh...</h1>

    <div>There's a mistake in your solution so far.</div>
    <div class="flex justify-end">
        <button class="btn btn-small mr-3" on:click={hideModal}>Ok</button>
    </div>
</div>