<template>
	<div class="page">
		<!-- <Slider /> -->
		<div class="intro">
			<div class="text">
				<p>" do not hire a man</p>
				<p>who does your</p>
				<p>work for money,</p>
				<p>but him who does it</p>
				<p>for love of it "</p>
			</div>

			<img src="/intro.webp" />
		</div>
		<EquitySection />
		<EstateSection />
		<PressSection />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "home",
});
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;

	.intro {
		width: 100vw;
		height: calc(100vh - 6rem);

		position: relative;

		.text {
			position: absolute;
			top: 50%;
			left: 35%;
			transform: translate(-50%, -50%);

			p {
				color: white;
				font-size: 2.5rem;
				font-weight: bold;
				text-transform: uppercase;

				margin-left: 2rem;

				&:first-of-type {
					margin: 0;
				}
			}

		}

		img {
			width: 100vw;
			height: 100%;
			object-fit: cover;
			object-position: top;
		}
	}
}

@media (max-width: 60rem) {
	.page .intro {
		width: 100vw;
		height: 60vh;

		.text p {
			font-size: 1.5rem;
			margin-left: 1rem;
		}

		img {
			width: 100vw;
			height: 100%;
			object-fit: cover;
			object-position: top;
		}
	}
}

@media (max-width: 45rem) {
	.page .intro {
		width: 100vw;
		height: 100%;

		.text p {
			font-size: 1rem;
			line-height: 1.2rem;
			margin-left: 0.5rem;
		}

		img {
			width: 100vw;
			height: 100%;
			object-fit: contain;
			object-position: top;
		}
	}
}
</style>