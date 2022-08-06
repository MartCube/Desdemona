<template>
	<div class="member_card">
		<div class="image">
			<img v-if="data.poster" :src="data.poster" >
			<div class="info">
				<h2>{{data.name}}</h2>
				<span>{{data.position}}</span>
			</div>
		</div>
		<p>{{data.description}}</p>
	</div>
</template>

<script setup lang="ts">
import type { member_T } from "~/types";
defineProps<{
	data: member_T;
}>();
</script>

<style lang="scss" scoped>
.member_card{
	width: 30%;
	margin-bottom: 5rem;


	display: flex;
	flex-direction: column;

	.image {
		width: 100%;
		height: 18rem;
		position: relative;
		background: $dark-grey;
		margin-bottom: 4rem;
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
				font-weight: 400;

			}
			span {
				font-size: 0.9rem;
				font-weight: 300;
				
			}
		}
	}
	p {
		line-height: 1.5rem;
	}
}

@media (max-width: $width) {
	.member_card{
		margin-bottom: 2rem;
		.image{
			height: 15rem;
			.info{
			h2{
				font-size: 1rem;
			}
			span{
				font-size: 0.75rem;
			}
		}
		}
		
		p{
			font-size: 0.9rem;
		}
	}
}

@media (max-width: 45rem) {
	.member_card{
		width: 100%;
		max-width: 15rem;
	}
}
</style>