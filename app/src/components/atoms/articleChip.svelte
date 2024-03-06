<script>
  export let url = "#";
  export let text = "blank";
  export let icon = null;
  export let img = null;

  import { urlFor } from "../../lib/utils/image";
</script>

<a href={url}>
  <img src={img ? urlFor(img) : null} alt="thumbnail" />
  <div class="content">
    <div class="top">
      <p class="tag">Featured Article</p>
      {#if icon}
        <i class={icon} />
      {/if}
    </div>
    <p class="title small">{text}</p>
  </div>
</a>

<style>
  a {
    background: white;
    z-index: 100;
    color: var(--black-60);
    transition: background 0.2s ease, color 0.2s ease;
    grid-column: var(--column-half);
    width: 100%;
    position: absolute;
    bottom: var(--padding);
    right: var(--padding);
    width: calc(50% - calc(var(--padding) * 1.5));
    display: flex;
    padding: 12px;
    gap: var(--padding);
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;
  }
  img {
    aspect-ratio: 1;
    width: 72px;
    background: var(--black-10);
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 2px;
  }
  .content {
    min-width: 0px;
    width: 100%;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }
  .title {
    white-space: nowrap;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--black-80);
  }
  .tag {
    font-size: 10px;
    padding: 2px 4px;
    background: var(--black-05);
    display: flex;
    justify-items: center;
    align-content: center;
    border-radius: 2px;
    color: var(--black-60);
    text-transform: capitalize;
    transition: background 0.2s ease, color 0.2s ease;
  }

  a:hover {
    background: var(--black-05);
    color: var(--black-80);
  }
  a:hover .tag {
    background: var(--black-10);
  }
  i {
    margin-right: 2px;
  }

  @media only screen and (max-width: 767px) {
    a {
      width: calc(100% - calc(var(--padding) * 2));
      left: var(--padding);
    }
  }
</style>
