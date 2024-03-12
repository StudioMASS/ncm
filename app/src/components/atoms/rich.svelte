<script>
  import InlineImage from "./inlineImage.svelte";
  import YoutubeEmbed from "./youtubeEmbed.svelte";

  export let content;

  // Helper function to render text with styles and links
  function renderText(node, markDefs) {
    if (node.marks && node.marks.length > 0) {
      const linkDef = findLink(markDefs, node.marks[0]);
      if (linkDef) {
        return `<a target="_blank" class="link" href="${linkDef.href ? linkDef.href : "#"}">${node.text}</a>`;
      }
    }
    return node.text;
  }

  // Function to find link definition
  function findLink(markDefs, key) {
    return markDefs.find((def) => def._key === key);
  }

  // Process content to group list items and handle styling
  function processContent(content) {
    const processedContent = [];
    let currentList = null;

    content.forEach((block) => {
      if (block.listItem) {
        if (!currentList || currentList.listType !== block.listItem) {
          if (currentList) {
            processedContent.push(currentList);
          }
          currentList = {
            _type: "list",
            listType: block.listItem,
            items: [block],
          };
        } else {
          currentList.items.push(block);
        }
      } else {
        if (currentList) {
          processedContent.push(currentList);
          currentList = null;
        }
        processedContent.push(block);
      }
    });

    if (currentList) {
      processedContent.push(currentList);
    }

    return processedContent;
  }

  $: processedContent = processContent(content);
</script>

<div class="small">
  {#each processedContent as block}
    {#if block._type === "list"}
      <ul>
        {#each block.items as item}
          <li>
            {@html item.children.map((child) => renderText(child, block.markDefs)).join("")}
          </li>
        {/each}
      </ul>
    {:else if block._type === "block"}
      {#if block.style === "h3"}
        <h3 class="medium">
          {@html block.children.map((child) => renderText(child, block.markDefs)).join("")}
        </h3>
      {:else if block.style === "blockquote"}
        <blockquote class="medium">
          {@html block.children.map((child) => renderText(child, block.markDefs)).join("")}
        </blockquote>
      {:else}
        <p>
          {@html block.children.map((child) => renderText(child, block.markDefs)).join("")}
        </p>
      {/if}
    {:else if block._type === "inlineImage"}
      <InlineImage src={block.image} caption={block.caption} />
    {:else if block._type === "video"}
      <YoutubeEmbed url={block.url} />
    {/if}
  {/each}
</div>

<style>
  p,
  li {
    margin-bottom: 1em;
  }
  figure {
    margin: 2em 0;
    text-align: center;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  figcaption {
    margin-top: 0.5em;
    font-style: italic;
  }
  h3 {
    margin-top: 80px;
    margin-bottom: 16px;
    font-weight: 600;
  }
  blockquote {
    margin: 80px 0px 80px 0px;
    padding-left: 32px;
    border-left: 4px solid var(--black-05);
  }
  p {
    font-size: 1em;
  }

  :global(.link) {
    /* color: red; */
    text-decoration: underline;
    text-decoration-color: var(--black-20);
    text-underline-position: under;
    transition: text-decoration-color 0.2s ease;
  }
  :global(.link:hover) {
    text-decoration-color: var(--black-100);
  }

  @media only screen and (max-width: 767px) {
    blockquote {
      margin: 40px 0px;
      padding-left: 16px;
      border-left: 3px solid var(--black-05);
    }
    h3 {
      margin-top: 52px;
      margin-bottom: 16px;
      font-weight: 600;
    }
  }
</style>
