<template>
	<div class="home_intro">
		<div class="text">
			<p>" do not hire a man</p>
			<p>who does your</p>
			<p>work for money,</p>
			<p>but him who does it</p>
			<p>for love of it "</p>
			<p>Henry David Thoreau</p>
		</div>
		<img v-lazy="img">
	</div>
</template>

<script setup lang="ts">
const img = '/intro.webp'
</script>

<style lang="scss" scoped>
.home_intro {
	width: 100vw;
	height: 100%;
	max-height: 30rem;
	position: relative;
	overflow: hidden;

	.text {
		z-index: 2;
		position: absolute;
		top: 50%;
		left: 35%;
		transform: translate(-50%, -50%);

		p {
			color: $white;
			font-size: 2rem;
			font-weight: bold;
			text-transform: uppercase;
			margin-left: 1.5rem;

			&:first-of-type {
				margin: 0;
			}

			&:last-of-type {
				margin-top: 1.5rem;
				font-size: 1rem;
				font-weight: normal;
			}
		}
	}

	img {
		width: 100vw;
		height: 100%;
		object-fit: cover;
		object-position: top;

		&[lazy=loading] {
			opacity: 0;
		}

		&[lazy=loaded] {
			opacity: 1;
			transition: all 0.35s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}
}

@media (max-width: 60rem) {
	.home_intro {
		width: 100vw;

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

@media (max-width: 35rem) {
	.home_intro {
		width: 100vw;
		height: 100%;

		.text p {
			font-size: 1rem;
			line-height: 1.2rem;
			margin-left: 0.5rem;

			&:last-of-type {
				margin-top: 1rem;
				font-size: 0.7rem;
				font-weight: normal;
			}
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