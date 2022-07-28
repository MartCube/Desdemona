<template>
	<div class="equity_card">
		<div class="image">
			<img v-if="data.poster" :src="data.poster" >
			<NuxtLink to="/">
				learn more <NuxtIcon name="arrow"/>
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
.equity_card{

	width: 100%;
	max-width: 70rem;
	margin-bottom: 5rem;

	display: flex;
	justify-content: space-between;

	.image {
		width: 35rem;
		height: 30rem;
		position: relative;
		background: $dark-grey;
		
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
		}
	}
	.text {
		max-width: 30rem;
		display: flex;
		flex-direction: column;
		justify-content: center;

		h2 { 
			margin-bottom: 1rem;
		}
		p {
			line-height: 2rem;
		}
	}
}
</style>