<template>
	<div class="intro" :class="{ white: white }">
		<h2>{{ subtitle }}</h2>
		<h1>{{ title }}</h1>
	</div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  white?: boolean
}>()
</script>

<style lang="scss" scoped>
.intro{
	width: 100%;
	height: 40vh;
	background: $primary;
	color: $white;
	margin-bottom: 5rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		text-transform: capitalize;
		font-size: 1.5rem;
		font-weight: 300;

        display: flex;
		align-items: center;
		&:before{
			content: '';
			width: 2.5rem;
			height: 2px;
			margin-right: 1rem;
			background: $white;
		}
		&:after{
			content: '';
			width: 2.5rem;
			height: 2px;
			margin-left: 1rem;
			background: $white;
		}
	}
	h1 {
		margin-top: 2rem;
		text-transform: uppercase;
		font-size: 3rem;
		font-weight: 700;

	}

	&.white {
		background: $white;
		margin: 0;
		
		h2{
			color: $primary;
			&:before,
			&:after {
				background: $primary;
			}
		}
		h1{
			color: $text;
		}
	}
}
</style>