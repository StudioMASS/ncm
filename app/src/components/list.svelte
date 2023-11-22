<script>
	import Filters from './atoms/filters.svelte';
	import Li from './atoms/li.svelte';
</script>

<section id="resources">
	<div class="container">
		<div class="lhs small">Reading list</div>
		<div class="rhs">
			<p class="small">
				Nisi mollit est commodo laborum ea cillum ea reprehenderit laborum elit deserunt. Irure enim
				anim ut velit nisi Lorem irure mollit non culpa Lorem laboris ad duis. Non nostrud irure
				consectetur veniam commodo consequat. Adipisicing aute deserunt ea sunt sint minim.
				Voluptate dolore nisi eiusmod irure irure nisi ex in exercitation anim consequat.
			</p>
			<Filters />
			<div class="body">
				<Li title={"Sam Altman: OpenAI CEO on GPT-4, ChatGPT, and the Future of AI"} tag={"Podcast"} author={"Lex Fridman Podcast"}/>
				<Li />
				<Li />
				<Li />
				<Li />
				<Li />
				<Li />
				<Li />
				<Li />
				<Li />
				<Li />
				<Li />
				<Li />
				<Li />
				<Li />
				<Li />
				<Li />
			</div>
		</div>
	</div>
</section>

<style>
	section {
		padding: 0px var(--padding) 220px var(--padding);
		position: relative;
		background: white;
	}
	.container {
		display: flex;
		gap: var(--padding);
		padding-top: var(--padding);
		border-top: var(--border);
		align-items: start;
	}
	.container div {
		width: 100%;
	}
	.lhs {
		position: sticky;
		top: var(--padding);
	}
	p {
		margin-bottom: 64px;
	}

	.body {
		border-top: var(--border);
		margin-top: 16px;
	}

	@media only screen and (max-width: 767px) {
	.container {
		flex-direction: column;
	}
	.lhs {
		position: static;
	}
	}
</style>
