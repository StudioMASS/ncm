<script>
	import { onMount } from 'svelte';

	import Faqs from '../components/faqs.svelte';
	import Floorplan from '../components/floorplan.svelte';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import Intro from '../components/intro.svelte';
	import List from '../components/list.svelte';
	import Location from '../components/location.svelte';
	import Nav from '../components/nav.svelte';

	let scrollY, ncm, building, resources, signup;
	let ncmPerc, buildingPerc, resourcesPerc, signupPerc;

	const scrollListener = () => {
		ncmPerc = Math.round((scrollY / ncm) * 100);
		buildingPerc = Math.round(((scrollY - ncm) / building) * 100);
		resourcesPerc = Math.round(((scrollY - ncm - building) / resources) * 100);
	};

	onMount(() => {
		window.addEventListener('scroll', scrollListener);

		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	});
</script>

<section>
	<div bind:clientHeight={ncm}>
		<Header />
		<Intro />
	</div>
	<div bind:clientHeight={building}>
		<Floorplan />
		<Faqs />
		<Location />
	</div>
	<div bind:clientHeight={resources}>
		<List />
	</div>
	<div bind:clientHeight={signup}>
		<Footer />
	</div>
	<Nav {ncmPerc} {buildingPerc} {resourcesPerc} {signupPerc} />
</section>

<svelte:window bind:scrollY />
