<script>
	import ButtonSecondary from './atoms/buttonSecondary.svelte';
</script>

<section id="intro">
	<div class="container">
		<h2 class="large">
			The National Communication Museum connects audiences to artefacts, stories and technologies of
			communication history. With items dating from the 1800s to current, we focus on demonstrating
			the powerful impact of technology in connecting societies. Adipisicing qui eiusmod commodo
			veniam magna aliquip pariatur esse in aliqua pariatur anim.
		</h2>

		<ButtonSecondary text="Signup for updates" url="#signup" />
	</div>
</section>

<style>
	section {
		padding: var(--padding);
		background: white;
		position: relative;
		height: 60vh;
	}
	h2 {
		margin-bottom: 32px;
	}
	.container {
		position: sticky;
		top: var(--padding);
		display: flex;
		flex-direction: column;
		align-items: start;
	}
</style>
