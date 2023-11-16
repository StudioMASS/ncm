<script lang="ts">
	import Faqs from '../components/faqs.svelte';
	import Floorplan from '../components/floorplan.svelte';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import Intro from '../components/intro.svelte';
	import List from '../components/list.svelte';
	import Location from '../components/location.svelte';
	import Nav from '../components/nav.svelte';
	import type { PageData } from './$types';

	export let data;
</script>

<section>
	<Header />
	<Intro />
	<Floorplan />
	<Faqs />
	<Location />
	<List />
	<Footer />
	<Nav />
</section>
