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

	ncmPerc = 1;

	const scrollListener = () => {
		let aboveSections = 0;
		ncmPerc = Math.round(((scrollY - aboveSections) / ncm) * 100) + 1;
		aboveSections = aboveSections + ncm;
		buildingPerc = Math.round(((scrollY - aboveSections) / building) * 100) + 1;
		aboveSections = aboveSections + building;
		resourcesPerc = Math.round(((scrollY - aboveSections) / (resources - signup / 2)) * 100) + 1;
		aboveSections = aboveSections + (resources - signup / 2);
		signupPerc = Math.round(((scrollY - aboveSections) / (signup / 2)) * 100);
	};

	onMount(() => {
		window.addEventListener('scroll', scrollListener);

		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	});

	export let data;
	console.log(data);
</script>

<section>
	<div bind:clientHeight={ncm}>
		<Header />
		<Intro {data} />
	</div>
	<div bind:clientHeight={building}>
		<Floorplan />
		<Faqs {data} />
		<Location />
	</div>
	<div bind:clientHeight={resources}>
		<List {data} />
	</div>
	<div bind:clientHeight={signup}>
		<Footer />
	</div>
	<Nav {ncmPerc} {buildingPerc} {resourcesPerc} {signupPerc} />
</section>

<svelte:window bind:scrollY />
