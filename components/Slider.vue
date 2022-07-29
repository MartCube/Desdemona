<template>
  <Carousel :settings="settings">
    <Slide v-for="src in images" :key="src">
      	<div class="slide">
			<img v-lazy="src"  />
		</div>
    </Slide>

    <template #addons>
		<Navigation/>
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
	name: 'Slider',
	components: {
		Carousel,
		Slide,
		Navigation,
	},
	data: () => ({
    	// carousel settings
		settings: {
			itemsToShow: 1,
			wrapAround: true
		},
		images:[ '/slider/red.webp',  '/slider/orange.webp','/slider/yellow.webp', ]
	})
});
</script>

<style lang="scss" >

.carousel {
	width: 100vw;
	

	.carousel__prev,
	.carousel__next {
		width: 3rem;
		height: 3rem;
 		
		svg{
			fill: $primary;
		}
	}

	.carousel__prev {
		left: 5%;
 		background-color: transparent;
		border: 1px solid white;
	}

	.carousel__next {
		right: 5%;
 		background-color: white;
	}
	
}




.slide {
	width: 100%;
	min-height: 100vh;
	background-color: $grey;

	color:  $text;
	font-size: 2rem;
	
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	overflow: hidden;
	
    img{
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
}

</style>
