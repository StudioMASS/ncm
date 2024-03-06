<script>
  export let url = "#";
  export let text = "blank";
  export let icon = null;
</script>

<a class="tiny" href={url} data-sveltekit-noscroll>
  {#if icon}
    <i class={icon} />
  {/if}
  <span>{text}</span>
</a>

<style>
  a {
    padding: 9px 14px;
    background: var(--black-05);
    border-radius: 4px;
    box-sizing: border-box;
    position: fixed;
    top: var(--padding);
    left: var(--padding);
    z-index: 100;
    color: var(--black-60);
    transition: background 0.2s ease, color 0.2s ease;
    box-sizing: border-box;
  }

  a:hover {
    background: var(--black-10);
    color: var(--black-80);
  }
  i {
    margin-right: 2px;
  }
</style>
