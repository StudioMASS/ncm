<script>
  import { onMount, onDestroy } from "svelte";
  export let data;
  // console.log(data.home[0]);

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

  let notLoaded = true;

  onMount(() => {
    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Initialize progress on mount
    notLoaded = false;
  });

  onDestroy(() => {
    window.removeEventListener("scroll", updateProgress);
  });

  let buttonText = "Copy Article Link"; // Initial button text

  async function copyLinkToClipboard() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      buttonText = "Copied!";

      setTimeout(() => {
        buttonText = "Copy Article Link";
      }, 1000);
    } catch (err) {
      // console.error("Failed to copy: ", err);
    }
  }

  //format date
  function formatDate(input) {
    const date = new Date(input);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "long" });
    return `${day} ${month}`;
  }

  let formattedDate = formatDate(data.date);
  // console.log(formattedDate);
</script>

<div class="track">
  <div class="progress" style="width: {progressWidth}" />
</div>

<div class:notLoaded class="return">
  <Chip text="Return" url="/" icon="ri-arrow-go-back-line" />
</div>

<section class="section">
  <main>
    <h1 class="large">{data.title}</h1>
    <div class="metadetails small">
      {data.author.name} on {formattedDate} • {data.time}
      min Read
    </div>
    <Rich content={data.content} />
    <ul class="tiny">
      <li>
        <a href="#" on:click|preventDefault={copyLinkToClipboard}
          ><i class="ri-link" />{buttonText}</a
        >
      </li>
      <li>
        <span>About</span>
        <p>
          {data.home[0].intro}
        </p>
      </li>
      <li>
        <span>Acknowledgement</span>
        <p>{data.home[0].acknowledgement}</p>
      </li>
    </ul>
  </main>
</section>

<style>
  section {
    padding: 232px var(--padding);
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    position: relative;
  }
  main {
    margin: 0px auto;
    width: 100%;
    max-width: 624px;
    color: var(--black-100);
    grid-column-start: 2;
    grid-column-end: 4;
  }
  .return {
    transition: opacity 0.2s ease;
    transition-delay: 800ms;
  }
  .notLoaded {
    opacity: 0;
  }
  .metadetails {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 64px;
    color: var(--black-60);
  }
  h1 {
    margin-bottom: 16px;
    color: var(--black-100);
    font-size: 40px;
  }
  .track {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    /* background: white; */
    z-index: 10;
  }
  .progress {
    position: absolute;
    left: 0;
    height: 100%;
    background: var(--black-10);
  }

  /* Footer stylings */
  ul {
    margin-top: 120px;
    border-top: 1px solid var(--black-10);
    padding: 32px 0px 0px;
    list-style-type: none;
    color: var(--black-60);
  }
  li {
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  ul p {
    font-size: 1em;
  }
  span {
    margin-bottom: 8px;
  }
  i {
    margin-right: 4px;
  }
  a {
    padding: 8px 12px 8px 10px;
    border-radius: 4px;
    box-sizing: border-box;
    margin-left: -8px;
  }
  a:hover {
    background: var(--black-05);
  }
  @media only screen and (max-width: 767px) {
    h1 {
      font-size: 28px;
    }
    section {
      padding: 152px var(--padding) 0px;
    }
    main {
      grid-column-start: 1;
      grid-column-end: 1;
    }
    .metadetails {
      margin-bottom: 0px;
    }
  }
</style>
