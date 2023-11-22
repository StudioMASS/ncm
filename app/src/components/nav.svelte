<script>
	import NavLink from './atoms/navLink.svelte';

	export let ncmPerc;
	export let buildingPerc;
	export let resourcesPerc;
	export let signupPerc;
</script>

<section>
	<NavLink text="National Communication Museum" url="#" perc={ncmPerc} />
	<NavLink text="Building" url="#building" perc={buildingPerc} />
	<NavLink text="Resources" url="#resources" perc={resourcesPerc} />
	<NavLink text="Signup" url="#signup" perc={signupPerc} />
</section>

<style>
	section {
		position: fixed;
		bottom: 0px;
		left: 0px;
		right: 0px;
		width: 100%;
		background: white;
		height: var(--nav-height);
		display: flex;
		box-sizing: border-box;
		align-items: center;
	}

	@media only screen and (max-width: 767px) {
		section {
			max-width: 100%;
			overflow: scroll;
			scroll-snap-type: x mandatory;
		}
		section::before {
			content:"Hello";
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			width: 25%;
			height: 100%;
			background: red;
			z-index: 10;
			display: block;
		}
	}
</style>
