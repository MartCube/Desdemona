<template>
	<div class="page">
		<Intro title="contact us" subtitle="send a message" white/>
		<Form />
		<!-- <iframe class="map" loading="lazy" src="https://www.google.com/maps/embed/v1/place?zoom=7&q=place_id:ChIJkUs7X9HN5nERaD-UmmcOhNc&key=AIzaSyDuP85vNlSIT1oXM9v194G-VfA3iI1W1oQ" /> -->
	</div>
</template>

<script setup lang="ts">
useHead({
 	title: 'Contact',
})
</script>

<style lang="scss" scoped>
.map{
	width: 70rem;
	height: 40rem;
	margin: 4rem 0;
	border: none;
}
</style>