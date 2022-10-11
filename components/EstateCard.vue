<template>
	<div class="estate_card">
		<div class="image">
			<div class="gradient"></div>
			<img v-if="data.poster" v-lazy="data.poster">
			<div class="info">
				<h2>{{data.title}}</h2>
				<h3>{{data.subtitle}}</h3>
			</div>
		</div>
		<p v-if="description">{{data.description}}</p>
		<NuxtLink v-if="data.link" :to="data.link" target="_blank">
			visit katafangaisland.com
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import type { estate_T } from "~/types";
defineProps<{
	data: estate_T;
	description?: true,
	link?: true,
}>();
</script>

<style lang="scss" scoped>
.estate_card {
	width: 30%;
	margin-bottom: 5rem;

	display: flex;
	flex-direction: column;

	.image {
		width: 100%;
		height: 18rem;
		position: relative;
		background: $dark-grey;

		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;

		color: $white;
		text-decoration: none;

		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;

			&[lazy=loading] {
				opacity: 0;
			}

			&[lazy=loaded] {
				opacity: 1;
				transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1);
			}
		}

		.gradient {
			position: absolute;
			z-index: 2;
			width: 100%;
			height: 100%;
			background-image: linear-gradient(to bottom, rgba(105, 105, 105, 0.05), rgba(35, 111, 158, 0.95));
		}

		.info {
			z-index: 3;

			h2 {
				text-transform: capitalize;
				font-size: 1.5rem;
				font-weight: bold;
				text-align: center;
				margin-bottom: 0.5rem;
			}

			h3 {
				text-transform: capitalize;
				font-size: 1rem;
				font-weight: normal;
				text-align: center;
				margin-bottom: 1rem;
			}
		}
	}

	p {
		margin-top: 2rem;
		line-height: 1.5rem;
	}

	a {
		margin-top: 1rem;
		width: fit-content;

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

@media (max-width: $width) {
	.estate_card {
		margin-bottom: 15vw;

		.image {
			height: 15rem;
		}

		p {
			font-size: 0.9rem;
		}
	}
}

@media (max-width: 45rem) {
	.estate_card {
		width: 100%;
		max-width: 15rem;

		.image {
			.info {
				h2 {
					font-size: 1.2rem;
				}

				h3 {
					font-size: 0.7rem;
				}
			}
		}
	}
}
</style>