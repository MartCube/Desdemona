<template>
	<div class="page">
		<HomeIntro />
		<EquitySection />
		<EstateSection />
		<PressSection />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "home",
});
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>