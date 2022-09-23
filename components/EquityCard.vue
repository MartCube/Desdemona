<template>
	<div class="equity_card">
		<div class="image">
			<img v-if="data.poster" v-lazy="data.poster">
			<NuxtLink :to="data.link" target="_blank">
				learn more
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
defineProps<{
	data: equity_T;
}>();
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
		background: $light-grey;

		display: flex;
		justify-content: center;

		img {
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
			position: absolute;
			bottom: 1rem;
			right: 1rem;

			background: $primary;
			padding: 0.8rem 1.2rem;

			text-transform: uppercase;
			text-decoration: none;
			color: $white;
			font-size: 0.8rem;
			font-weight: 700;

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
		justify-content: center;

		h2 {
			margin-bottom: 1rem;
			font-weight: 600;
			font-size: 2rem;
		}

		p {
			line-height: 2rem;
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