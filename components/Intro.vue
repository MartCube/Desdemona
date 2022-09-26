<template>
	<!-- :class="{ white: data.white }" -->
	<div class="intro">
		<h2>{{ t.subtitle}}</h2>
		<h1>{{ t.title }}</h1>
	</div>
</template>

<script setup lang="ts">
const data = [
	{
		title: 'ceo',
		subtitle: 'Christian Jagodzinski'
	},
	{
		title: 'private equity',
		subtitle: 'highlights'
	},
	{
		title: 'team',
		subtitle: 'meat our members'
	},
	{
		title: 'real estate',
		subtitle: 'select properties'
	},
	{
		title: 'press',
		subtitle: 'milestones'
	},
	{
		title: 'contact',
		subtitle: 'send a message'
	},
]

const route = useRoute()
const t = computed(() =>
	data.filter(item => {
		return item.title === route.fullPath.replaceAll('/', '').replaceAll('-', ' ')
	})[0]
)
</script>

<style lang="scss" scoped>
.intro {
	width: 100%;
	height: 50vh;
	background-image: linear-gradient(90deg, hsl(203deg 64% 38%) 0%, hsl(205deg 52% 40%) 19%, hsl(206deg 43% 41%) 28%, hsl(207deg 36% 41%) 35%, hsl(208deg 31% 42%) 41%, hsl(208deg 25% 42%) 47%, hsl(209deg 21% 42%) 53%, hsl(210deg 16% 42%) 59%, hsl(210deg 12% 42%) 65%, hsl(211deg 8% 42%) 72%, hsl(211deg 4% 41%) 81%, hsl(0deg 0% 41%) 100%);
	color: $white;
	margin-bottom: 5rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		margin-bottom: 1rem;
		text-transform: capitalize;
		font-size: 1rem;
		font-weight: normal;

		display: flex;
		align-items: center;

		&:before {
			content: '';
			width: 2.5rem;
			height: 2px;
			margin-right: 1rem;
			background: $white;
		}

		&:after {
			content: '';
			width: 2.5rem;
			height: 2px;
			margin-left: 1rem;
			background: $white;
		}
	}

	h1 {
		text-transform: uppercase;
		font-size: 2.5rem;
		font-weight: bold;
		text-align: center;
	}

	&.white {
		background: $white;
		margin: 0;

		h2 {
			color: $primary;

			&:before,
			&:after {
				background: $primary;
			}
		}

		h1 {
			color: $text;
		}
	}
}

@media (max-width: $width) {
	.intro {
		height: 50vh;
		margin-bottom: 0;
		justify-content: center;

		h1 {
			margin: 0;
		}

		&.white {
			background: $grey;
		}
	}
}

@media (max-width: 45rem) {
	.intro {
		h1 {
			font-size: 1.5rem;
		}

		h2 {
			font-size: 1rem;
		}
	}
}
</style>