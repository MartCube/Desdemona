<template>
	<div class="press_card">
		<div class="media">
			<div v-if="data.video" class="video">
				<iframe 
					width="100%" 
					height="360" 
					:src="data.video" 
					title="YouTube video player" 
					frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					/>
			</div>
			<div v-if="data.poster" class="poster">
				<img :src="data.poster" alt="">
			</div>
		</div>
		<div class="info">
			<p class="author">{{data.author}}</p>
			<h2>{{data.title}}</h2>
			<p>{{data.description}}</p>
		</div>
	</div>
</template>


<script setup lang="ts">
import type { press_T } from "~/types";
defineProps<{
	data: press_T;
}>();
</script>

<style lang="scss" scoped>
.press_card {
	width: 100%;
	max-width: 40rem;
	height: 100%;
	margin-bottom: 5rem;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

	display: flex;
	flex-direction: column;
	.media{
		width: 100%;
		height: 22.5rem;
		background: #bebebe;
	}
	.info{
		padding: 2rem;

		.author{
			margin: 2rem 0;
			text-transform: capitalize;
			font-weight: 300;

			display: flex;
			align-items: center;
			&:before{
					content: '';
					width: 2rem;
					height: 2rem;
					border-radius: 50%;
					margin-right: 1rem;
					background: $dark-grey;
				}
		}
		h2{
			font-size: 2rem;
			line-height: 3rem;
			margin-bottom: 2rem;
			&::first-letter{
				text-transform: capitalize;
			}
		}
		p{
			line-height: 1.5rem;
			
		}
	}
}

@media (max-width: 45rem) {
	.press_card{
		margin-bottom: 2rem;
		.media{
			height: 18rem;
			iframe{
				height: 18rem;
			}
		}
		.info{
			h2{
				font-size: 1.5rem;
				line-height: 2rem;
			}
			p{
				font-size: 0.9rem;
				
			}
		}
	}
}
</style>