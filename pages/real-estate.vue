<template>
	<div class="page">
		<div class="grid">
			<EstateCard v-for="item in estate" :data="item" description link />
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
.grid {
	width: 100%;
	max-width: $width;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
}

@media (max-width: $width) {
	.grid {
		padding: 15vw 5vw 0 5vw;
	}
}

@media (max-width: 45rem) {
	.grid {
		flex-direction: column;
		align-items: center;
	}
}
</style>