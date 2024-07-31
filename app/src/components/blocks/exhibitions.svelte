<script>
  import { urlFor } from "../../lib/utils/image";
  import { getFileURL } from "../../lib/utils/sanity";

  export let data = null;
  console.log("Find me!", data);
</script>

<section class="section">
  <div class="divider" />
  <h2 class="small">Upcoming Exhibitions</h2>
  <h3 class="small">Opening in Spring 2024</h3>
  {#each data.articles as item}
    {#if item.type == "featured"}
      <a class="card" href={item.slug.current}>
        <img class="fill" src={urlFor(item.image)} />
        {#if data.video}
          <video src={getFileURL(data.video.asset._ref)} class="fill" autoplay muted loop />
        {/if}
        <div class="darken" />
        <p class="small">{item.title}</p>
        <!-- <p class="small opacity">Aute eu deserunt sint eiusmod proident sint</p> -->
      </a>
    {/if}
  {/each}
</section>

<style>
  section {
    background: white;
    padding-bottom: 0px;
  }
  a {
    padding: var(--padding);
    background: #f5f5f5;
    grid-column: var(--column-half);
    width: 100%;
    box-sizing: border-box;
    aspect-ratio: 5/4;
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: relative;
    overflow: hidden;
    color: white;
  }
  .opacity {
    opacity: 0.75;
  }
  .fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .darken {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    transition: background 0.2s ease;
  }
  p {
    position: relative;
  }

  a:hover .darken {
    background: rgba(0, 0, 0, 0.4);
  }

  h3 {
    color: var(--black-50);
  }
  h2,
  h3 {
    grid-column: var(--column-half);
  }
</style>
