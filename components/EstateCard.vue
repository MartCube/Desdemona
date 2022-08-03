<template>
	<div class="estate_card">
		<NuxtLink class="image" to="/">
			<img v-if="data.poster" :src="data.poster" >
			<h2>{{data.title}}</h2>
			<h3>{{data.subtitle}}</h3>
		</NuxtLink>
		<p>{{data.description}}</p>
	</div>
</template>

<script setup lang="ts">
import type { estate_T } from "~/types";
defineProps<{
	data: estate_T;
}>();
</script>

<style lang="scss" scoped>
.estate_card{
	width: 100%;
	max-width: 20rem;
	margin-bottom: 5rem;

	display: flex;
	flex-direction: column;
	.image {
		width: 100%;
		height: 20rem;
		margin-bottom: 2rem;
		position: relative;
		background: $dark-grey;
		background-image: linear-gradient(
  0deg,
  hsl(203deg 64% 38%) 0%,
  hsl(207deg 32% 41%) 39%,
  hsl(210deg 15% 42%) 61%,
  hsl(0deg 0% 41%) 100%
);

		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;

		color:$white;
		text-decoration: none;

		h2 {
			text-transform: capitalize;
			font-size: 1.5rem;
			font-weight: 600;
			text-align: center;
			margin-bottom: 0.5rem;
		}
		h3 {
			font-size: 1rem;
			font-weight: 400;
			text-align: center;
			margin-bottom: 1rem;
		}
	}
	p {
		line-height: 1.5rem;
	}
}

@media (max-width: 70rem) {
	.estate_card{
		max-width: 25rem;
		margin-bottom: 2rem;
	}
}
</style>