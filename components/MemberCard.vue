<template>
	<div class="member_card">
		<div class="image">
			<img v-if="data.image" v-lazy="data.image">
			<div class="info">
				<h2>{{data.name}}</h2>
				<span>{{data.position}}</span>
			</div>
		</div>
		<p>{{data.description}}</p>
		<template v-if="link">
			<NuxtLink class="ceo" to="/ceo">
				learn more
				<Icon name="arrow" />
			</NuxtLink>
		</template>
	</div>
</template>

<script setup lang="ts">
import type { member_T } from "~/types";
defineProps<{
	data: member_T;
	link?: boolean
}>();
</script>

<style lang="scss" scoped>
.member_card {
	width: 30%;
	margin-bottom: 5rem;

	display: flex;
	flex-direction: column;

	.image {
		width: 100%;
		height: 22rem;
		position: relative;
		background: $dark-grey;
		margin-bottom: 4rem;

		img {
			width: inherit;
			height: inherit;
			object-fit: cover;
			object-position: top;

			&[lazy=loading] {
				opacity: 0;
			}

			&[lazy=loaded] {
				opacity: 1;
				transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1);
			}
		}

		.info {
			width: max-content;
			position: absolute;
			bottom: 0;
			left: 0;
			transform: translateY(50%);

			background: $white;
			padding: 1rem 1.5rem;
			box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);

			text-transform: uppercase;
			text-decoration: none;
			color: $text;

			h2 {
				margin-bottom: 0.5rem;
				font-size: 1.2rem;
				font-weight: normal;

			}

			span {
				font-size: 0.9rem;
				font-weight: normal;

			}
		}
	}

	p {
		line-height: 1.5rem;
	}

	.ceo {
		border: none;
		width: fit-content;
		background: $primary;
		padding: 1rem 2rem;

		margin-top: 2rem;

		color: $white;
		font-size: 1rem;
		line-height: 1rem;
		font-weight: bold;
		text-transform: uppercase;
		text-decoration: none;

		display: flex;

		.icon {
			fill: $white;
			width: 1rem;
			height: 1rem;
			margin-left: 1rem;
		}
	}
}

@media (max-width: $width) {
	.member_card {
		margin-bottom: 15vw;

		.image {
			height: 15rem;

			.info {
				h2 {
					font-size: 1rem;
				}

				span {
					font-size: 0.75rem;
				}
			}
		}

		p {
			font-size: 0.9rem;
		}
	}
}

@media (max-width: 45rem) {
	.member_card {
		width: 100%;
		max-width: 15rem;
	}
}
</style>