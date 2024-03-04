<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let visited = false;
  export let text = "placeholder";
  let visible = true;
  let display = true;

  if (visited) {
    visible = false;
    display = false;
  }

  let notLoaded = true;

  onMount(() => {
    notLoaded = false;
  });

  function closeAcknowledgement() {
    visible = false;
    setTimeout(() => {
      display = false;
    }, 300);
  }
</script>

<a
  on:click={closeAcknowledgement}
  class:fade={!visible}
  transition:fade
  style:display={display ? "flex" : "none"}
>
  <h2 class="medium" class:notLoaded>
    {text}
  </h2>
  <p class="small" class:notLoaded>Proceed</p>
</a>

<style>
  a {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--black-100);
    color: white;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding);
    box-sizing: border-box;
    transition: opacity 0.4s ease;
    cursor: pointer;
  }
  a.fade {
    opacity: 0;
  }
  h2 {
    max-width: 50ch;
    text-align: center;
    margin-bottom: 16px;
    transition: opacity 1.8s ease;
    transition-delay: 0.2s;
  }
  p {
    position: absolute;
    bottom: calc(var(--padding) * 3);
    opacity: 0.5;
    transition: opacity 0.2s ease;
    transition: opacity 1.8s ease;
    transition-delay: 1.2s;
  }
  p:hover {
    opacity: 1;
  }
  .notLoaded {
    opacity: 0;
  }
</style>
