<template>
	<div class="page">
		<Intro title="private equity" subtitle="highlights" />
		<EquityCard v-for="item in equity" :data="item" />
	</div>
</template>

<script setup lang="ts">
import { equity } from "~/data"
useHead({
 	title: 'Private Equity',
})
</script>

<style lang="scss" scoped>

</style>