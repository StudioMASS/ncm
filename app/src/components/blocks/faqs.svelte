<script>
  import Question from "../atoms/question.svelte";

  export let data;
</script>

<section class="section">
  <div class="divider" />
  <div class="lhs small">Frequently asked questions</div>
  <div class="rhs small">
    {#each data.posts[0].faqs as item}
      <Question question={item.question} answer={item.answer} />
    {/each}
  </div>
</section>

<style>
  section {
    padding-top: 0px;
    padding-bottom: 200px;
    background: white;
  }
  .lhs {
    position: sticky;
    top: var(--padding);
    grid-column: var(--column-half);
  }
  .rhs {
    grid-column: var(--column-half);
  }

  @media only screen and (max-width: 767px) {
    .lhs {
      position: static;
      margin-bottom: calc(32px - var(--padding));
    }
    section {
      padding-bottom: 100px;
    }
  }
</style>
