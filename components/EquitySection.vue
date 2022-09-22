<template>
	<section class="equity_section">
		<div class="wrap">
			<h3 class="subtitle">highlights</h3>
			<h2 class="title">private equity</h2>
			<div class="grid">
				<img v-for="item in equity" :key="item.poster" v-lazy="item.poster">
			</div>
			<NuxtLink class="link" to='/private-equity'>learn more</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
import { equity } from "~/data"

</script>

<style lang="scss" scoped>
.equity_section {
	.wrap {
		.grid {
			width: 100%;
			max-width: $width;

			display: flex;
			justify-content: space-between;
			align-items: center;

			img {
				width: 12rem;
				height: 100%;
				max-height: 10rem;
				object-fit: contain;

				&[lazy=loading] {
					opacity: 0;
				}

				&[lazy=loaded] {
					opacity: 1;
					transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1);
				}
			}
		}
	}
}

// @media (max-width: $width) {
// 	.equity_section .wrap .grid img{
// 		width: 10rem;
// 		height: 5.5rem;
// 	}
// }

@media (max-width: 45rem) {
	.equity_section {
		.wrap {
			.grid {
				flex-wrap: wrap;

				img {
					width: 40%;
					height: initial;
				}
			}
		}
	}
}
</style>