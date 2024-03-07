<script>
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import NavMobileLink from "./navMobileLink.svelte";

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
  // function pageChanges(pageIndex) {
  //   barIndex = pageIndex;
  //   emblaApi.scrollTo(barIndex);
  // }
</script>

<div class="embla" use:emblaCarouselSvelte={{ options }} on:emblaInit={onInit}>
  <div class="embla__container">
    <NavMobileLink first text="National Communication Museum" url="#" />
    <NavMobileLink text="Building" url="#building" />
    <NavMobileLink text="Resources" />
    <NavMobileLink last text="Signup" />
  </div>
</div>

<style>
  .embla {
    overflow: hidden;
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100vw;
    background: white;
  }
  .embla__container {
    display: flex;
    flex-shrink: 0;
    width: 100%;
    box-sizing: border-box;
  }
</style>
