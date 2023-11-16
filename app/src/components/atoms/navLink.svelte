<script>
	export let text;
	export let url;
	export let perc;
</script>

<a href={url}>
	<p class="tiny">{text}</p>
	<div class="bg" style="width: {perc}%" />
</a>

<style>
	a {
		padding: 12px 10px;
		width: 100%;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
	}
	a:first-child {
		padding-left: 21px;
	}
	a:last-child {
		padding-right: 21px;
	}
	p {
		z-index: 1;
		position: relative;
	}
	.bg {
		position: absolute;
		left: 0px;
		top: 0px;
		bottom: 0px;
		width: 100%;
		background: var(--black-05);
		z-index: 0;
	}
</style>
