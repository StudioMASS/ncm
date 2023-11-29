<script>
	export let data;

	let allCount = data.length;
	let articleCount = data.filter(item => item.contentType === 'article').length;
	let podcastCount = data.filter(item => item.contentType === 'podcast').length;
	let videoCount = data.filter(item => item.contentType === 'video').length;

	export let selectedValue = "all"

</script>

<div>
	<a class="small active" href="#all" on:click={() => selectedValue == 'all'}>All<span>{allCount}</span></a>
	<a class="small" href="#articles" on:click={() => selectedValue == 'article'}>Articles<span>{articleCount}</span></a>
	<a class="small" href="#podcasts">Podcasts<span>{podcastCount}</span></a>
	<a class="small" href="#videos">Videos<span>{videoCount}</span></a>
</div>

<style>
	div {
		display: flex;
		gap: 16px;
	}
	span {
		font-feature-settings: 'ss14' on, 'sups' on;
		margin-left: 4px;
	}
	a {
		opacity: 0.5;
		transition: opacity 0.2 ease;
	}
	a:hover {
		opacity: 0.75;
	}
	a.active {
		opacity: 1;
	}
</style>
