<script>
  export let text = "placeholder";
  export let url = "#";

  export let first = false;
  export let last = false;

  export let percentage = 0;
  let width, innerWidth;

  $: {
    width = Math.min(Math.max(parseInt(percentage), 0), 101);
    // console.log(percentage);
  }

  let textWidth;
  let padding = "24px";
</script>

<svelte:window bind:innerWidth />

<a
  href={url}
  class="tiny"
  class:active={percentage >= 1 && percentage <= 100}
  style:padding-left={first && innerWidth <= 767
    ? "calc(calc(100% - " + textWidth + "px)/2)"
    : null}
  style:padding-right={last && innerWidth <= 767
    ? "calc(calc(100% - " + textWidth + "px)/2)"
    : null}
>
  <span bind:clientWidth={textWidth}>{text}</span>
  <div class="bg" style={width > 100 ? "width: 0%" : `width: ${width}%`} />
  <!-- style={width > 100 ? "width: 0%" : `width: ${width}%`} -->
</a>

<style>
  a {
    width: 100%;
    padding: 12px 10px;
    position: relative;
    color: var(--black-50);
    transition: color 0.2s ease;
    display: flex;
    align-items: center;
  }
  .active {
    color: var(--black-100);
  }
  span {
    display: block;
    z-index: 1;
  }
  a:first-child {
    padding-left: var(--padding);
  }
  a:last-child {
    padding-right: var(--padding);
  }
  .bg {
    position: absolute;
    left: 0px;
    top: auto;
    bottom: 0px;
    width: 50%;
    height: 100%;
    background: var(--black-05);
    z-index: 0;
    pointer-events: none;
  }
  @media only screen and (max-width: 767px) {
    a {
      flex: 0 0 auto;
      padding: 16px 32px;
      box-sizing: border-box;
      min-width: 0;
      text-align: center;
      width: auto;
    }
    a:first-child {
      padding-left: inherit;
    }
    a:last-child {
      padding-right: inherit;
    }
    .bg {
      display: none;
    }
  }
</style>
