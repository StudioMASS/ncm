<script>
  import { onMount, onDestroy } from "svelte";
  export let data;

  import Button from "../../../components/atoms/buttonSecondary.svelte";
  import Rich from "../../../components/atoms/rich.svelte";
  import Chip from "../../../components/atoms/chip.svelte";

  let progressWidth = "0%";

  // Function to calculate and update scroll progress
  function updateProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    progressWidth = `${scrollProgress}%`;
  }

  onMount(() => {
    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Initialize progress on mount
  });

  onDestroy(() => {
    window.removeEventListener("scroll", updateProgress);
  });
</script>

<Chip text="Return" url="/" icon="ri-arrow-go-back-line" />

<section>
  <main>
    <h1 class="large">{data.title}</h1>
    <div class="metadetails small">
      <Button text={data.author.name} />
      on {data.date}
    </div>
    <Rich content={data.content} />
  </main>
</section>

<!-- Scrolling indicator for the scroll depth -->
<div class="track">
  <div class="progress" style="width: {progressWidth}" />
</div>

<style>
  section {
    padding: 240px var(--padding) 400px;
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    z-index: 10;
    position: relative;
  }
  main {
    margin: 0px auto;
    width: 100%;
    max-width: 588px;
    color: var(--black-80);
  }
  .metadetails {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 64px;
  }
  h1 {
    margin-bottom: 10px;
    color: var(--black-100);
  }
  .track {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    /* background: white; */
    z-index: 10;
  }
  .progress {
    position: absolute;
    left: 0;
    height: 100%;
    background: var(--black-10);
  }
</style>
