<template>
	<div class="page">
		<Intro title="press" subtitle="milestones" />
		<PressCard v-for="item in press" :data="item" />	
	</div>
</template>

<script setup lang="ts">
import { press } from "~/data"
useHead({
 	title: 'Press',
})
</script>

<style lang="scss" scoped>
</style>