<script>
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
  <slot />
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
    height: 100dvh;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .column {
    width: 100%;
    height: 100dvh;
    background: aqua;
    opacity: 0.2;
  }
</style>
