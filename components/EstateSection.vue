<template>
	<section class="estate_section">
		<div class="wrap">
			<h3 class="subtitle">select properties</h3>
			<h2 class="title">real estate</h2>
			<div class="grid">
				<NuxtLink v-for="data in estate" class="image" to="/">
					<img v-if="data.poster" :src="data.poster" >
					<h2>{{data.title}}</h2>
					<h3>{{data.subtitle}}</h3>
				</NuxtLink>
			</div>	
			<NuxtLink class="link" to='/real-estate'>
				learn more <Icon name="arrow" />
			</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
import { estate } from "~/data"


</script>

<style lang="scss" scoped>
.estate_section {
	background: #eeeff2;
	.wrap .grid{
		width: 100%;
		max-width: 70rem;
		// margin: 5rem 0;

		display: flex;
		justify-content: space-between;

		.image {
			width: 30%;
			height: 18rem;
			position: relative;
			background: $dark-grey;
			background-image: linear-gradient(0deg,hsl(203deg 64% 38%) 0%,hsl(207deg 32% 41%) 39%,hsl(210deg 15% 42%) 61%,hsl(0deg 0% 41%) 100%);

			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;

			color:$white;
			text-decoration: none;

			h2 {
				font-size: 1.5rem;
				text-transform: capitalize;
				font-weight: 600;
				margin-bottom: 0.5rem;
			}
			h3 {
				text-align: center;
				font-weight: 400;
				margin-bottom: 1rem;
			}
		}
	}
}

@media (max-width: 60rem) {
	.estate_section .wrap .grid .image{
		width: 15rem;
		height: 15rem;

		
	}
}

@media (max-width: 50rem) {
	.estate_section .wrap .grid{
		justify-content: flex-start	;

		.image{
			width: 50vw;
			max-width: 12rem;
			height: 12rem;
			h2{
				font-size: 1.2rem;
			}
			h3{
				font-size: 0.8rem;
			}

			&:first-of-type{
				margin-right: 5%;
			}
			&:last-of-type{
				display: none;
			}
		}
	}
}

@media (max-width: 24rem) {
	.estate_section .wrap .grid{
		justify-content: flex-start	;

		.image{
			width: 10rem;
			height: 10rem;
		}
	}
}
</style>