<template>
	<div class="page">
		<div class="grid">
			<MemberCard v-for="(item, i) in team" :data="item" :link="i == 0" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { team } from "~/data"
useHead({
	title: 'Team Members',
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
		padding: 5vw 5vw 0 5vw;
	}
}

@media (max-width: 50rem) {
	.grid {
		flex-direction: column;
		align-items: center;
	}
}
</style>