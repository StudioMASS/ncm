<script>
  import { urlFor } from "../../lib/utils/image";

  export let title;
  export let tag;
  export let author;
  export let img;
  export let url;
  export let internal = false;
</script>

<a href={url ? url : "#"} target={internal ? null : "_blank"}>
  <img src={img ? urlFor(img) : null} alt="thumbnail" />
  <div class="content">
    <p class="small title">{title}</p>
    <div class="subline">
      <p class="tag">{tag}</p>
      <p class="tiny">{author}</p>
    </div>
  </div>
</a>

<style>
  a {
    padding: var(--padding) 0px;
    border-bottom: var(--border);
    display: flex;
    gap: var(--padding);
    align-items: center;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    transition: all 0.15s ease;
  }
  a:hover {
    background: var(--black-05);
    padding: var(--padding);
  }
  img {
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    background: var(--black-05);
    border-radius: 4px;
    border: var(--border);
    overflow: hidden;
    object-fit: cover;
  }
  .subline {
    display: flex;
    align-items: center;

    gap: 8px;
  }
  .small {
    margin-bottom: 4px;
  }
  .content,
  img {
    z-index: 0;
    position: relative;
  }
  .tag {
    font-size: 10px;
    padding: 2px 4px;
    background: rgba(25, 25, 25, 0.1);
    display: flex;
    justify-items: center;
    align-content: center;
    border-radius: 2px;
    color: var(--black-60);
    text-transform: capitalize;
  }
  .title {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content {
    width: 80%;
  }

  @media only screen and (max-width: 767px) {
    a:hover {
      padding: var(--padding) 0px;
      background: transparent;
    }
  }
</style>
