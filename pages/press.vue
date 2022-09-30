<template>
	<div class="page">
		<div class="grid">
			<PressCard v-for="item in press" :data="item" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { press } from "~/data"
useHead({
	title: 'Press',
})
</script>

<style lang="scss" scoped>
.grid {
	width: 100%;
	max-width: 70rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}

@media (max-width: 70rem) {
	.grid {
		padding: 15vw 5vw 0 5vw;
		max-width: initial;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>