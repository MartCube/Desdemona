<template>
	<div class="page">
		<Intro title="private equity" subtitle="highlights" />
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
.grid{
	width: 100%;
	max-width: 70rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

@media (max-width: 70rem) {
	.grid{
		padding: 5vw 5vw 0 5vw;
		max-width: initial;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>