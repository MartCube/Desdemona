<template>
	<div class="page">
		<Intro title="the team members" subtitle="meet our team" />
		<div class="grid">
			<MemberCard v-for="item in team" :data="item"/>
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
.grid{
	width: 100%;
	max-width: 70rem;
	display: flex;
	justify-content: space-between;
}
@media (max-width: 70rem) {
	.grid{
		padding: 5vw;
		max-width: initial;
		flex-direction: column;
		align-items: center;
	}
}
</style>