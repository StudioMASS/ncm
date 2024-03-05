<script>
  export let text = "placeholder";
  export let url = "#";

  export let first = false;
  export let last = false;

  let textWidth;
  let padding = "24px";
</script>

<a href={url} class="item small" style:padding-left={first ? "calc(calc(100% - " + textWidth + "px)/2)" : padding} style:padding-right={last ? "calc(calc(100% - " + textWidth + "px)/2)" : padding}>
  <span bind:clientWidth={textWidth}>{text}</span>
</a>

<style>
  .item {
    flex: 0 0 auto;
    padding: 16px 32px;
    box-sizing: border-box;
    min-width: 0;
    text-align: center;
  }
  span {
    display: block;
  }
</style>
