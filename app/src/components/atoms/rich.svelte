<script>
  import InlineImage from "./inlineImage.svelte";
  import YoutubeEmbed from "./youtubeEmbed.svelte";

  export let content;

  // Helper function to render text with styles and links
  function renderText(node) {
    if (node.marks) {
      let text = node.text;
      node.marks.forEach((mark) => {
        if (mark === "strong") text = `<strong>${text}</strong>`;
        if (mark === "em") text = `<em>${text}</em>`;
        if (mark._type === "link") {
          // Handle rendering of links properly
          text = `<a href="${mark.href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
        }
      });
      return text;
    }
    return node.text;
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
            {@html item.children.map((child) => renderText(child)).join("")}
          </li>
        {/each}
      </ul>
    {:else if block._type === "block"}
      {#if block.style === "h3"}
        <h3 class="medium">
          {@html block.children.map((child) => renderText(child)).join("")}
        </h3>
      {:else if block.style === "blockquote"}
        <blockquote class="medium">
          {@html block.children.map((child) => renderText(child)).join("")}
        </blockquote>
      {:else}
        <p>
          {@html block.children.map((child) => renderText(child)).join("")}
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
</style>
