<script>
	import Question from './atoms/question.svelte';
</script>

<section>
	<div class="container">
		<div class="lhs">Frequently asked questions</div>
		<div class="rhs">
			<Question />
			<Question />
			<Question />
			<Question />
			<Question />
			<Question />
			<Question />
		</div>
	</div>
</section>

<style>
	section {
		padding: var(--padding) var(--padding) 220px;
		position: relative;
		background: white;
	}
	.container {
		display: flex;
		gap: var(--padding);
		padding-top: var(--padding);
		border-top: 0.5px solid var(--border);
		align-items: start;
	}
	.container div {
		width: 100%;
	}
	.lhs {
		position: sticky;
		top: var(--padding);
	}
</style>
