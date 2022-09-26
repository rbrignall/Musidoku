<script>
	import Timer from './Timer.svelte';
	import Actions from './Actions.svelte';
</script>

<div class="action-bar space-y-3 xxs:space-y-0">
	<Timer />

	<Actions />
</div>

<style>
	.action-bar {
		@apply flex flex-col flex-wrap justify-between pb-5 max-w-lg mx-auto;
	}

	@screen xxs {
		.action-bar {
			@apply flex-row;
		}
	}
</style>