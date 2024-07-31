<script>
  import { onDestroy, onMount } from "svelte";
  import { mapboxgl } from "./../../lib/utils/mapbox.js";

  let map;
  let mapContainer;
  let animationFrameId;
  const lng = 145.036471;
  const lat = -37.822357;
  const zoom = 17.75;
  const pitch = 60;
  let bearing = 0; // Start bearing at 0

  function initMap(container) {
    map = new mapboxgl.Map({
      container: container,
      style: "mapbox://styles/bbeagley00/clcjzdubo005414kdrx4x6yj2",
      cooperativeGestures: true,
      center: [lng, lat],
      zoom: zoom,
      pitch: pitch,
      bearing: bearing,
      interactive: false,
    });

    // Start the rotation animation
    rotateMap();
  }

  function rotateMap() {
    bearing += 0.025; // Adjust the rotation speed here
    map.setBearing(bearing);
    animationFrameId = requestAnimationFrame(rotateMap);
  }

  onDestroy(() => {
    if (map) map.remove();
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  });

  onMount(() => {
    initMap(mapContainer);
  });
</script>

<div bind:this={mapContainer} />

<style>
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
