<script>
  export let data;

  $: console.log(data.path);

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
</script>

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
