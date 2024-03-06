<script>
  import Mapbox from "../elements/mapbox.svelte";
</script>

<section class="section">
  <div class="divider" />
  <h2 class="small">Location</h2>
  <h3 class="small">375 Burwood Rd, Hawthorn VIC 3122</h3>
  <div class="frame">
    <Mapbox />
  </div>
</section>

<style>
  section {
    padding: var(--padding);
    background: white;
    position: relative;
  }
  h2,
  h3 {
    grid-column: var(--column-half);
  }

  h3 {
    color: var(--black-50);
  }
  .frame {
    padding-top: var(--aspect-ratio);
    background: var(--black-05);
    position: relative;
    overflow: hidden;
    width: 100%;
    grid-column: var(--column-full);
  }
</style>
