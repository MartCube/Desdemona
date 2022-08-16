<template>
	<div class="estate_card">
		<NuxtLink class="image" to="/real-estate">
			<div class="gradient"></div>
			<img v-if="data.poster" v-lazy="data.poster" >
			<div class="info">
				<h2>{{data.title}}</h2>
				<h3>{{data.subtitle}}</h3>
			</div>
		</NuxtLink>
		<p v-if="description">{{data.description}}</p>
	</div>
</template>

<script setup lang="ts">
import type { estate_T } from "~/types";
defineProps<{
	data: estate_T;
	description?: true,
}>();
</script>

<style lang="scss" scoped>
.estate_card{
	width: 30%;
	margin-bottom: 5rem;

	display: flex;
	flex-direction: column;
	.image {
		width: 100%;
		height: 18rem;
		margin-bottom: 2rem;
		position: relative;
		background: $dark-grey;

		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;

		color:$white;
		text-decoration: none;

		img{
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			&[lazy = loading] {
				opacity: 0;
			}
			&[lazy = loaded] {
				opacity: 1;
				transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1);
			}
		}
		.gradient{
			position: absolute;
			z-index: 2;
			width: 100%;
			height: 100%;
			background-image: linear-gradient(to bottom, rgba(105, 105, 105, 0.05), rgba(35, 111, 158, 0.95));
			// background-image: linear-gradient(0deg,hsl(203deg 64% 38%) 0%,hsl(207deg 32% 41%) 39%,hsl(210deg 15% 42%) 61%,hsl(0deg 0% 41%) 100%);
		}
		.info{
			z-index: 2;	
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
	}
	p {
		line-height: 1.5rem;
	}
}

@media (max-width: $width) {
	.estate_card{
		margin-bottom: 2rem;
		.image{
			height: 15rem;
		}
		
		p{
			font-size: 0.9rem;
		}
	}
}

@media (max-width: 45rem) {
	.estate_card{
		width: 100%;
		max-width: 15rem;
	}
}
</style>