<template>
	<svg viewBox="0 0 512 512" class="icon" :class="`${name}`">
		<path :d="getPath(name)" />
	</svg>
</template>


<script setup lang="ts">
import icons from '~/assets/icons.json'

defineProps<{
	name: string
}>();


function getPath(value: string) {
	return icons[value]
}
</script>

<style lang="scss" scoped>
.icon {
	width: 24px;
	height: 24px;
}
</style>