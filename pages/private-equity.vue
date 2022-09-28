<template>
	<div class="page">
		<div class="grid">
			<EquityCard v-for="item in equity" :data="item" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { equity } from "~/data"
useHead({
	title: 'Private Equity',
})
</script>

<style lang="scss" scoped>
.grid {
	width: 100%;
	max-width: $width;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

@media (max-width: $width) {
	.grid {
		padding: 5vw 5vw 0 5vw;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>