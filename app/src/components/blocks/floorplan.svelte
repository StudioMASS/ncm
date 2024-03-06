<script>
  import FloorplanEmbed from "../atoms/floorplanEmbed.svelte";
</script>

<section class="section" id="building">
  <div class="divider" />
  <h2 class="small">Building</h2>
  <h3 class="small">
    The NCM is located in two floors of a refurbished telephone exchange
  </h3>
  <FloorplanEmbed />
</section>

<style>
  section {
    background: white;
  }
  h3 {
    color: var(--black-50);
  }
  h2,
  h3 {
    grid-column: var(--column-half);
  }
</style>
