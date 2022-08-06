<template>
	<GoogleMap
		class="map"
		api-key="AIzaSyDuP85vNlSIT1oXM9v194G-VfA3iI1W1oQ" 
		:center="{ lat: 25.761681, lng: -80.191788 }" 
		:zoom="12" />
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap } from "vue3-google-map";


export default defineComponent({
  	components: { GoogleMap },
});
</script>

<style lang="scss" scoped>
.map{
	width: 100%;
	max-width: $width;
	height: 40rem;
	margin: 5rem 0;
}
@media (max-width: $width) {
	.map{
		padding:5%;
		margin: 0;
	}
}

@media (max-width: 45rem) {
	.map{
		height: 25rem;
	}
}
</style>