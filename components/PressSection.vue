<template>
	<section class="press_section">
		<div class="wrap">
			<h3 class="subtitle">milestones</h3>
			<h2 class="title">press</h2>
			<div class="grid">
				<div class="cards">
					<NuxtLink v-for="item in data" to="/press" class="press_card">
						<div class="image">
							<img v-lazy="item.poster">
						</div>
						<div class="info">
							<h2> {{ item.title }} </h2>
							<p>
								watch now
								<Icon name="arrow" />
							</p>
						</div>
					</NuxtLink>
				</div>
				<NuxtLink class="main_card" to="/press" target="_blank">
					<div class="gradient"></div>
					<img v-lazy="pressVideos[2].poster">
					<div class="info">
						<h2> {{ pressVideos[2].title }} </h2>
						<p>
							watch now
							<Icon name="arrow" />
						</p>
					</div>
				</NuxtLink>
			</div>
			<NuxtLink class="link" to='/press'>learn more</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
import { pressVideos } from "~/data"

const data = pressVideos.slice(0, 2);
</script>

<style lang="scss" scoped>
.grid {
	display: flex;
	justify-content: space-between;

	.cards {
		width: fit-content;
		height: 26rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.press_card {
			display: flex;
			text-decoration: none;

			.image {
				width: 12rem;
				height: 12rem;
				background: $light-grey;

				img {
					width: 100%;
					height: 100%;
				}
			}

			.info {
				width: fit-content;
				padding: 2rem;
				display: flex;
				flex-direction: column;
				justify-content: center;

				h2 {
					margin-bottom: 1rem;
					color: $header;
					font-size: 2rem;
					font-weight: normal;
				}

				p {
					text-transform: uppercase;
					color: $light-grey;
					font-size: 1rem;
					line-height: 1rem;
					display: flex;

					.icon {
						margin-left: 1rem;
						width: 1rem;
						height: 1rem;
						fill: $light-grey;
					}
				}
			}
		}
	}

	.main_card {
		width: 22rem;
		height: 26rem;
		background: $light-grey;
		position: relative;
		text-decoration: none;

		display: flex;
		align-items: flex-end;

		.gradient {
			position: absolute;
			z-index: 2;
			width: 100%;
			height: 100%;
			background-image: linear-gradient(to bottom, rgba(105, 105, 105, 0.05), rgba(35, 111, 158, 0.95));
		}

		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;

			&[lazy=loading] {
				opacity: 0;
			}

			&[lazy=loaded] {
				opacity: 1;
				transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1);
			}
		}

		.info {
			z-index: 2;
			padding: 2rem;
			color: $white;

			h2 {
				margin-bottom: 1rem;
				font-size: 2rem;
				font-weight: normal;
			}

			p {
				text-transform: uppercase;
				font-size: 1rem;
				line-height: 1rem;

				display: flex;

				.icon {
					margin-left: 1rem;
					width: 1rem;
					height: 1rem;
					fill: $white;
				}
			}
		}
	}
}


@media (max-width: 55rem) {
	.press_section .wrap .grid {
		.cards {
			width: 100%;
		}

		.main_card {
			display: none;
		}
	}
}

@media (max-width: 32rem) {
	.press_section .wrap .grid {
		.cards {
			height: fit-content;
			flex-direction: row;
			justify-content: space-between;

			.press_card {
				width: 40vw;
				flex-direction: column;

				.image {
					width: 40vw;
					height: 40vw;
				}

				.info {
					padding: 0;
					margin-top: 1rem;

					h2 {
						font-size: 1.2rem;
					}

					p {
						font-size: 0.7rem;

						.icon {
							width: 0.7rem;

						}
					}
				}
			}
		}
	}
}
</style>