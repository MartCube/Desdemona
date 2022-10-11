<template>
	<div class="press_card">
		<div class="media">
			<div v-if="data.video" class="video">
				<iframe width="100%" height="360" :src="data.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
			</div>
		</div>
		<div class="info">
			<h2>{{data.title}}</h2>
		</div>
	</div>
</template>


<script setup lang="ts">
import type { video_T } from "~/types";
defineProps<{
	data: video_T;
}>();
</script>

<style lang="scss" scoped>
.press_card {
	width: 100%;
	max-width: 45rem;
	height: 100%;
	margin-bottom: 5rem;
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

	display: flex;
	flex-direction: column;
	background: $grey;

	.media {
		align-self: center;
		width: 35rem;
		margin: 2.5rem 0;
		height: 22.5rem;
		background: #bebebe;
	}

	.info {
		padding: 2rem;
		background: $white;


		h2 {
			font-size: 2rem;
			line-height: 3rem;
			font-weight: normal;

			// margin-bottom: 2rem;
			&::first-letter {
				text-transform: capitalize;
			}
		}

		p {
			line-height: 1.5rem;

		}
	}
}

@media (max-width: 45rem) {
	.press_card {
		margin-bottom: 15vw;

		.media {
			width: 100%;
			margin: 0;

			height: 18rem;

			iframe {
				height: 18rem;
			}
		}

		.info {
			h2 {
				font-size: 1.5rem;
				line-height: 2rem;
			}

			p {
				font-size: 0.9rem;
			}
		}
	}
}
</style>