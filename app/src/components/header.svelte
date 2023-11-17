<script>
	import Gradient from "./atoms/gradient.svelte";

</script>
<a href="#intro">
	<h1 class="large">National Communication Museum</h1>
	<h1 class="large">Opening Winter 2024</h1>
	<Gradient />
</a>

<style>
	a {
		height: calc(100vh - var(--nav-height));
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: var(--padding);
		background-color: var(--black-100);
		color: white;
		box-sizing: border-box;
		position: sticky;
		top: 0px;
		z-index: 0;
	}
	h1{
		z-index: 1;
		position: relative;
	}
</style>
