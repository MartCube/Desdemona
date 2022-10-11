<template>
	<div class="article_card">
		<img v-lazy="data.poster" :alt="data.title">
		<h2>{{data.title}}</h2>
		<span>{{data.link}}</span>
		<p>{{data.description}}</p>
		<NuxtLink :to="data.link" target="_blank">
			learn more
			<Icon name="arrow" />
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import type { article_T } from "~/types";
defineProps<{
	data: article_T;
}>();
</script>

<style lang="scss" scoped>
.article_card {
	width: 45rem;
	padding: 2.5rem;
	margin-bottom: 5rem;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	background-color: $white;

	display: flex;
	flex-direction: column;

	img {
		width: 15rem;
		height: 18.5rem;
		align-self: center;
		margin-bottom: 2rem;
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	}

	h2 {
		text-transform: capitalize;
		font-weight: normal;
		font-size: 2rem;
		margin-bottom: 0.5rem;
		color: $header;

	}

	span {
		text-transform: capitalize;
		color: $primary;
		margin-bottom: 2rem;
	}

	p {
		color: $text;
	}

	a {
		margin-top: 2rem;
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

@media (max-width: 45rem) {
	.article_card {
		width: 100%;
		margin-bottom: 15vw;
		padding: 2.5rem 1rem;

	}
}
</style>