<section>
	<div class="container">
		<div class="header">
			<h2>Location</h2>
			<h3>375 Burwood Rd, Hawthorn VIC 3122</h3>
		</div>
		<div class="placeholder" />
	</div>
</section>

<style>
	section {
		padding: var(--padding);
		background: white;
		position: relative;
	}
	.header {
		display: flex;
	}
	.header * {
		width: 100%;
		margin-bottom: var(--padding);
	}
	h3 {
		color: var(--black-50);
	}
	.container {
		border-top: 0.5px solid var(--border);
		padding-top: var(--padding);
	}
	.placeholder {
		padding-top: var(--aspect-ratio);
		background: var(--black-05);
	}

	@media only screen and (max-width: 767px) {
		.header {
			flex-direction: column;
		}
	}
</style>
