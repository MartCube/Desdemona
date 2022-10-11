<template>
	<div class="article_card">
		<img v-lazy="data.poster" :alt="data.title">
		<h2>{{data.title}}</h2>
		<span>{{data.link}}</span>
		<p>{{data.description}}</p>

		<template v-if="!showText">
			<button @click="showText = true">
				read article
				<Icon name="arrow" />
			</button>
		</template>
		<template v-else>
			<div class="text">
				<p v-for="item in data.text">
					{{ item }}
				</p>
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
import type { article_T } from "~/types";

const showText = ref(false)
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
		width: 25rem;
		height: 32rem;
		align-self: center;
		margin-bottom: 2rem;
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

		&[lazy=loading] {
			opacity: 0;
		}

		&[lazy=loaded] {
			opacity: 1;
			transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
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
		margin-bottom: 1rem;
	}

	button {
		width: fit-content;
		margin-top: 1rem;
		padding: 0.8rem 1.2rem;
		border: none;
		cursor: pointer;
		background: $primary;

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