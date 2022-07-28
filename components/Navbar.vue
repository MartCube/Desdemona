<template>
	<header>
		<NuxtLink class="logo" to="/">
			<h1>desdemona</h1>
			<h2>capital</h2>
		</NuxtLink>
		<div class="links">
			<NuxtLink v-for="item in links" @click="menuValue = false" :to="item.url" class="link">
				{{ item.name }}
			</NuxtLink>
			<NuxtLink class="contact" to="/contact">
				contact <NuxtIcon name="arrow"/>
			</NuxtLink>
		</div>
		<div @click="menuToggle()" class="menu">
			<span v-if="!menuValue">
				menu
			</span>
			<span v-else>
				close
			</span>
		</div>
	</header>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { links } from '~/data'

const [menuValue, menuToggle] = useToggle()

</script>

<style lang="scss" scoped>
header {
	width: 100%;
	max-width: 70rem;

	position: relative;
	display: flex;
	flex-direction: column;
	position: relative;
	user-select: none;

	.logo{
		height: 6rem;
		display: flex;
		flex-direction: column;
		justify-content: center;

		text-decoration: none;
		text-transform: uppercase;
		color: $title;
		h1{
			font-size: 2rem;
			font-weight: 700;
			&::first-letter{
				color: $primary;
			}
		}
		h2{
			font-size: 1.5rem;	
			font-weight: 300;
			&::first-letter{
				color: $primary;
			}
		}
	}
	
	.links {
		z-index: 2;
		position: absolute;
		bottom: 0;
		transform: translateY(100%);
		width: 100%;
		height: 4rem;
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
		background: $white;

		display: flex;
		justify-content: space-evenly;
		align-items: center;
		overflow: hidden;
		.link {
			height: 100%;
			display: flex;
			align-items: center;
			position: relative;

			text-decoration: none;			
			font-size: 1rem;
			line-height: 1rem;
			color: $text;
			font-weight: 600;
			transition: all 0.2s ease;
			&:before{
				content: '';
				width: 100%;
				height: 4px;
				background: $primary;
				position: absolute;
				bottom: 0;

				transform: translateY(1rem);
				opacity: 0;
				transition: all 0.2s ease;
			}
			&:hover{
				color: $primary;
				&:before{
					transform: translateY(0);
					opacity: 1;
				}
			}
			&.router-link-active {
				color: $primary;
				&:before{
					transform: translateY(0);
					opacity: 1;
				}
			}
		}
		.contact {
			border: none;
			background: $primary;
			padding: 0.8rem 1.8rem;
		
			color: $white;
			font-size: 1rem;
			font-weight: 600;
			text-transform: uppercase;
			text-decoration: none;	
		}
	}
	.menu{
		display: none;
		z-index: 3;
		position: fixed;
		top: 15%;
		right: 15%;

		cursor: pointer;
		user-select: none;
	}
}
</style>
