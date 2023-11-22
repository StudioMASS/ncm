<section>
	<div class="container">
		<div class="header">
			<h2 class="small">Location</h2>
			<h3 class="small">375 Burwood Rd, Hawthorn VIC 3122</h3>
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
		border-top: var(--border);
		padding-top: var(--padding);
	}
	.placeholder {
		padding-top: var(--aspect-ratio);
		background: var(--black-05);
	}

	@media only screen and (max-width: 767px) {
		.header {
			/* flex-direction: column; */
			margin-bottom: var(--padding);
			gap: 4px;
			display: block;
		}

		.header * {
		display: inline;
		width: auto;
		margin-bottom: 0px;
		}

		h2::after {
		content: " –";
		}
	}
</style>
