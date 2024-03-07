<script>
  import { slide } from "svelte/transition";
  import Filters from "../elements/filters.svelte";
  import Li from "../elements/li.svelte";

  export let data;

  let filter = "all";
</script>

<section class="section" id="resources">
  <div class="divider" />
  <p class="lhs small">Further readings</p>
  <div class="rhs">
    <p class="small paragraph">
      {data.posts[0].listpara}
    </p>
    <Filters data={data.posts[0].items} bind:selectedValue={filter} />
    <div class="body">
      {#each data.posts[0].items as item (item._key)}
        {#if item.contentType == filter || filter == "all" || (filter == "feature" && !item.contentType)}
          <div transition:slide>
            {#if item._type == "reference"}
              <Li
                title={item.ref.title}
                tag="Feature"
                author="NCM"
                img={item.ref.image}
                url={"/" + item.ref.slug.current}
                internal={true}
              />
            {:else}
              <Li
                title={item.title}
                tag={item.contentType}
                author={item.author}
                img={item.image}
                url={item.link}
              />
            {/if}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    padding: 0px var(--padding) 220px var(--padding);
    position: relative;
    background: white;
  }
  .lhs {
    position: sticky;
    top: var(--padding);
    grid-column: var(--column-half);
  }
  .rhs {
    width: 100%;
    grid-column: var(--column-half);
  }
  .paragraph {
    margin-bottom: 76px;
  }

  @media only screen and (max-width: 767px) {
    .lhs {
      position: static;
    }
    .divider {
      grid-column: span 1;
    }
    .paragraph {
      margin-bottom: 32px;
      color: var(--black-50);
    }
    section {
      padding-bottom: 100px;
    }
  }
</style>
