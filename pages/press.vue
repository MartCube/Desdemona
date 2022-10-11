<template>
	<div class="page">
		<div class="grid">
			<VideoCard v-for="item in pressVideos" :data="item" />
		</div>
		<div class="grid grey">
			<ArticleCard v-for="item in pressArticles" :data="item" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { pressVideos } from "~/data"
import { pressArticles } from "~/data"

useHead({
	title: 'Press',
})
</script>

<style lang="scss" scoped>
.grid {
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	&.grey {
		padding-top: 5rem;
		background-color: $grey;
	}
}

@media (max-width: 70rem) {
	.grid {
		padding: 15vw 5vw 0 5vw;
		max-width: initial;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&.grey {
			padding-top: 15vw;
			background-color: $grey;
		}
	}
}
</style>