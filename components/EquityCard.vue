<template>
	<div class="equity_card">
		<div class="image">
			<div class="gradient"></div>
			<img class="poster" v-lazy="data.poster">
			<img class="logo" v-lazy="data.logo">
			<NuxtLink v-if="data.link" :to="data.link" target="_blank">
				visit
				{{ link }}
				<Icon name="arrow" />
			</NuxtLink>
		</div>
		<div class="text">
			<h2>{{data.title}}</h2>
			<p>{{data.description}}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { equity_T } from "~/types";

const props = defineProps<{
	data: equity_T;
}>();


const link = computed(() =>
	props.data.link.replaceAll('https://www.', '').replaceAll('/', '')
)

// link.replaceAll('https://www.', '')

</script>

<style lang="scss" scoped>
.equity_card {
	width: 100%;
	margin-bottom: 5rem;

	display: flex;
	justify-content: space-between;

	.image {
		width: 50%;
		height: 20rem;
		position: relative;
		overflow: hidden;
		background: $light-grey;

		display: flex;
		justify-content: center;

		.gradient {
			position: absolute;
			z-index: 2;
			width: 100%;
			height: 100%;
			background-image: linear-gradient(to top, rgba(105, 105, 105, 0.05), rgba(35, 111, 158, 0.95));
		}

		.poster {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;

			&[lazy=loading] {
				opacity: 0;
			}

			&[lazy=loaded] {
				opacity: 1;
				transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1);
			}
		}

		.logo {
			z-index: 2;
			width: 12rem;
			height: 100%;
			max-height: 10rem;
			object-fit: contain;

			&[lazy=loading] {
				opacity: 0;
			}

			&[lazy=loaded] {
				opacity: 1;
				transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1);
			}
		}

		a {
			z-index: 3;
			position: absolute;
			bottom: 1rem;
			right: 1rem;

			background: $primary;
			padding: 0.8rem 1.2rem;

			text-transform: uppercase;
			text-decoration: none;
			color: $white;
			font-size: 0.8rem;
			font-weight: bold;

			display: flex;
			align-items: center;

			.icon {
				fill: $white;
				width: 0.8rem;
				height: 0.8rem;
				margin-left: 0.8rem;
			}
		}
	}

	.text {
		width: 45%;
		display: flex;
		flex-direction: column;

		h2 {
			text-transform: capitalize;
			margin-bottom: 1rem;
			font-weight: normal;
			font-size: 1.5rem;
		}

		p {
			line-height: 2rem;
			color: #3e3d40;
		}
	}
}

@media (max-width: 70rem) {
	.equity_card {
		.text {
			h2 {
				font-size: 1.5rem;
			}

			p {
				font-size: 0.9rem;
			}
		}
	}
}

@media (max-width: 45rem) {
	.equity_card {
		flex-direction: column;
		max-width: 20rem;
		margin-bottom: 15vw;

		.image {
			width: 100%;
			margin-bottom: 2rem;
		}

		.text {
			width: 100%;
		}
	}
}
</style>