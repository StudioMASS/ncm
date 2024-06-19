<script>
  export let data;

  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });

  import { fade, fly, slide } from "svelte/transition";
  import { page } from "$app/stores"; // Import $page store

  let grids = false;

  // Function to handle keydown event
  function onKeyDown(event) {
    if (event.ctrlKey && event.key === "g") {
      grids = !grids; // Toggle grids
      event.preventDefault(); // Prevent default behavior
    }
  }

  // Get from Sanity
  const meta = {
    title: "National Communication Museum | Opening Spring 2024",
    description:
      "The National Communication Museum connects audiences to artefacts, stories and technologies of communication history.",
    image: "./images/facebook-og.png",
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

<svelte:window on:keydown={onKeyDown} />

<main>
  {#key data.path}
    {#if data.path !== "/"}
      <div
        in:fly={{ y: 50, duration: 400, delay: 450, opacity: 0 }}
        out:fly={{ y: 0, duration: 400, delay: 0, opacity: 0 }}
      >
        <slot />
      </div>
    {:else}
      <div in:fade={{ duration: 400, delay: 400 }} out:fade={{ duration: 200 }}>
        <slot />
      </div>
    {/if}
  {/key}
</main>

{#if grids}
  <div class="section grid">
    <div class="column" />
    <div class="column" />
    <div class="column" />
    <div class="column" />
  </div>
{/if}

<style>
  .grid {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    pointer-events: none;
    height: 100vh;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .column {
    width: 100%;
    height: 100vh;
    background: aqua;
    opacity: 0.2;
  }
</style>
