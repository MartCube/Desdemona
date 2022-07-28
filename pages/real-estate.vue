<template>
	<div class="page">
		<Intro title="Real Estate" subtitle="Select Properties" />
		<div class="grid">
			<EstateCard v-for="item in estate" :data="item" />
		</div>		
	</div>
</template>

<script setup lang="ts">
import { estate } from "~/data"
useHead({
 	title: 'Real Estate',
})
</script>

<style lang="scss" scoped>
.grid{
	width: 100%;
	max-width: 70rem;
	display: flex;
	justify-content: space-between;
}
</style>