<template>
	<section class="estate_section">
		<div class="wrap">
			<h3 class="subtitle">select properties</h3>
			<h2 class="title">real estate</h2>
			<div class="grid">
				<EstateCard v-for="item in data" :data="item" />
			</div>	
			<NuxtLink class="link" to='/real-estate'>
				learn more <Icon name="arrow" />
			</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
import { estate } from "~/data"

const data = estate.slice(0, 3);
</script>

<style lang="scss" scoped>
.estate_section {
	background: #eeeff2;
	.wrap .grid{
		width: 100%;
		max-width: 70rem;

		display: flex;
		justify-content: space-between;
		
		.estate_card{
			margin:0;
			.image{
				margin:0;
			}
		}
	}
}

@media (max-width: 45rem) {
	.estate_section .wrap .grid  {
		.estate_card{
			&:nth-child(3){
				display: none;
			}
		}
	}
}

@media (max-width: 32rem) {
	.estate_section .wrap .grid  {
		.estate_card{
			width:45%;
			height: 12rem;
		}
	}
}
</style>