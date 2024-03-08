<script>
  import { onMount } from "svelte";

  import Faqs from "../components/blocks/faqs.svelte";
  import Floorplan from "../components/blocks/floorplan.svelte";
  import Footer from "../components/blocks/footer.svelte";
  import Header from "../components/blocks/header.svelte";
  import Intro from "../components/blocks/intro.svelte";
  import List from "../components/blocks/list.svelte";
  import Location from "../components/blocks/location.svelte";
  import Nav from "../components/blocks/navigation/nav.svelte";
  import Acknowledgement from "../components/acknowledgement.svelte";
  import Logo from "../components/blocks/logo.svelte";
  import NavigationMobile from "../components/blocks/navigation/navigationMobile.svelte";
  import Navigation from "../components/blocks/navigation/navigation.svelte";

  let scrollY, ncm, building, resources, signup;
  let ncmPerc, buildingPerc, resourcesPerc, signupPerc;
  let sectionPercentages = [0, 0, 0, 0];

  ncmPerc = 1;
  let notLoaded = true;

  const scrollListener = () => {
    let aboveSections = 0;
    sectionPercentages[0] = Math.max(
      Math.min(Math.round(((scrollY - aboveSections) / ncm) * 100) + 1, 101),
      0
    );
    aboveSections = aboveSections + ncm;
    sectionPercentages[1] = Math.max(
      Math.min(
        Math.round(((scrollY - aboveSections) / building) * 100) + 1,
        101
      ),
      0
    );
    aboveSections = aboveSections + building;
    sectionPercentages[2] = Math.max(
      Math.min(
        Math.round(
          ((scrollY - aboveSections) / (resources - signup / 2)) * 100
        ) + 1,
        101
      ),
      0
    );
    aboveSections = aboveSections + (resources - signup / 2);
    sectionPercentages[3] = Math.max(
      Math.min(
        Math.round(((scrollY - aboveSections) / (signup / 2)) * 100),
        101
      ),
      0
    );

    // console.log(sectionPercentages);
  };

  onMount(() => {
    window.addEventListener("scroll", scrollListener);
    notLoaded = false;

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  let screenWidth;
  function handleResize() {
    screenWidth = window.innerWidth;
  }
  onMount(() => {
    screenWidth = window.innerWidth;
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  export let data;
  // Get from Sanity
  const meta = {
    title: "National Communication Museum | Opening Winter 2024",
    description:
      "The National Communication Museum connects audiences to artefacts, stories and technologies of communication history.",
    image: "",
    url: "",
    canonical: "",
    twitter: "",
  };
</script>

<svelte:head>
  <title>{meta.title}</title>
  <link rel="canonical" href={meta.canonical} />

  <meta name="description" content={meta.description} />

  <meta property="og:title" content={meta.title} />
  <meta property="og:type" content="website" />
  <meta property="og:URL" content={meta.url} />
  <meta property="og:image" content={meta.image} />
  <meta property="og:description" content={meta.description} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={meta.title} />
  <meta name="twitter:description" content={meta.description} />
  <meta name="twitter:image" content={meta.image} />
  <meta name="twitter:site" content="@{meta.twitter}" />
</svelte:head>

<section>
  <Acknowledgement
    text={data.posts[0].acknowledgement}
    visited={data.visited}
  />
  <div bind:clientHeight={ncm}>
    <Header article={data.posts[0].featureArticle} />
    <Logo />
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
    <Footer socials={data.posts[0].social} />
  </div>
  <!-- {#if screenWidth > 1000}
    <Nav {ncmPerc} {buildingPerc} {resourcesPerc} {signupPerc} {notLoaded} />
  {:else}
    <NavigationMobile />
  {/if} -->
  <Navigation {sectionPercentages} />
</section>

<svelte:window bind:scrollY />

<style>
  section {
    transition: all 1.2s ease;
    transition-delay: 0.4s;
  }
  .notLoaded {
    opacity: 0;
  }
</style>
