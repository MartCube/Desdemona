<template>
	<section class="equity_section">
		<div class="wrap">
			<h3 class="subtitle">highlights</h3>
			<h2 class="title">private equity</h2>
			<div class="grid">
				<nuxt-link v-for="item in data" :key="item.title" to="/private-equity" target="_blank">
					<img v-lazy="item.logo" />
				</nuxt-link>
			</div>
			<NuxtLink class="link" to='/private-equity'>learn more</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
import { equity } from "~/data"
const data = equity.slice(0, 4);
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

			a {
				width: 20%;
				height: 4rem;

				img {
					width: 100%;
					height: 100%;
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
}

@media (max-width: 45rem) {
	.equity_section {
		.wrap {
			.grid {
				flex-wrap: wrap;

				a {
					width: 40%;

					&:nth-child(-n+2) {
						margin-bottom: 2rem;
					}
				}
			}
		}
	}
}
</style>