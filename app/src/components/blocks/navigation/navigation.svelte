<script>
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import NavigationLink from "./navigationLink.svelte";

  export let sectionPercentages;

  let emblaApi;
  let options = {
    align: "center",
    duration: 25,
    skipSnaps: true,
  };

  // variables
  let pageIndex = 0;
  let barIndex = 0;

  const onInit = (event) => {
    emblaApi = event.detail;
    emblaApi.on("select", () => {
      barIndex = emblaApi.selectedScrollSnap();
      barChanges(barIndex);
    });
  };

  // functions
  function barChanges(barIndex) {
    pageIndex = barIndex;
    switch (barIndex) {
      case 0:
        location.hash = "#";
        break;
      case 1:
        location.hash = "#building";
        break;
      case 2:
        location.hash = "#resources";
        break;
      case 3:
        location.hash = "#signup";
        break;
    }
  }
</script>

<div class="embla" use:emblaCarouselSvelte={{ options }} on:emblaInit={onInit}>
  <div class="embla__container">
    <NavigationLink
      percentage={sectionPercentages[0]}
      text="National Communication Museum"
      url="#"
      first
    />
    <NavigationLink
      percentage={sectionPercentages[1]}
      text="Building"
      url="#building"
    />
    <NavigationLink
      percentage={sectionPercentages[2]}
      text="Resources"
      url="#resources"
    />
    <NavigationLink
      percentage={sectionPercentages[3]}
      text="Signup"
      url="#signup"
      last
    />
  </div>
</div>

<!-- <div class="background" /> -->

<style>
  .embla {
    overflow: hidden;
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100vw;
    background: white;
    height: var(--nav-height);
  }
  .embla__container {
    display: flex;
    flex-shrink: 0;
    width: 100%;
    box-sizing: border-box;
  }
  .background {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--nav-height);
  }
</style>
