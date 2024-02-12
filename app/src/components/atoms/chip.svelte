<script>
  export let url = "#";
  export let text = "blank";
  export let icon = null;
</script>

<a href={url}>
  {#if icon}
    <i class={icon} />
  {/if}
  <span>{text}</span>
</a>

<style>
  a {
    padding: 5px 8px;
    background: var(--black-05);
    border-radius: 4px;
    box-sizing: border-box;
    position: fixed;
    top: var(--padding);
    left: var(--padding);
    z-index: 100;
  }
</style>
