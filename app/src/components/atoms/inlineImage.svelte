<script>
  import { urlFor } from "../../lib/utils/image";
  export let src = null;
  export let caption = null;
</script>

<figure>
  <img src={src ? urlFor(src) : null} alt={caption ? caption : null} />
  {#if caption}
    <figcaption class="tiny">{caption}</figcaption>
  {/if}
</figure>

<style>
  figure {
    width: 100%;
    margin: 64px 0px;
  }
  img {
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    background: var(--black-05);
  }
  figcaption {
    margin-top: 4px;
    color: var(--black-60);
  }

  @media only screen and (max-width: 767px) {
    figure {
      margin: 40px 0px;
    }
  }
</style>
