<template>
	<div class="equity_card">
		<div class="image">
			<img v-if="data.poster" v-lazy="data.poster" >
			<NuxtLink to="/">
				learn more <Icon name="arrow"/>
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
	margin-bottom: 5rem;

	display: flex;
	justify-content: space-between;

	.image {
		width: 35rem;
		height: 30rem;
		position: relative;
		background: $dark-grey;

		display: flex;
		justify-content: center;
		img{
			width: 15rem;
			height: 9rem;
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
			.icon{
				fill: $white;
				width: 0.8rem;
				height: 0.8rem;
				margin-left: 0.8rem;
			}
		}
	}
	.text {
		max-width: 30rem;
		display: flex;
		flex-direction: column;
		justify-content: center;

		h2 { 
			margin-bottom: 2rem;
			font-weight: 600;
			font-size: 2rem;
		}
		p {
			line-height: 2rem;
		}
	}
}

@media (max-width: 70rem) {
	.equity_card{
		.image{
			width: 50%;
			height: 20rem;
		}
		.text{
			width: 45%;
		}
	}
}
@media (max-width: 45rem) {
	.equity_card{
		flex-direction: column;
		max-width: 20rem;
		.image{
			width: 100%;
			margin-bottom: 2rem;
		}
		.text{
			width: 100%;
			h2{
				font-size: 1.5rem;
			}
			p{
				font-size: 0.9rem;
			}
		}
	}
}
</style>