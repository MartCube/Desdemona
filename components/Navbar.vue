<template>
	<header>
		<NuxtLink class="logo" to="/">
			<h1>desdemona</h1>
			<h2>capital</h2>
		</NuxtLink>
		<div class="links" :class="{ show: menuValue}">
			<NuxtLink v-for="item in links" @click="menuValue = false" :to="item.url" class="link">
				{{ item.name }}
			</NuxtLink>
			<NuxtLink class="contact" to="/contact" @click="menuValue = false">
				contact <Icon name="arrow"/>
			</NuxtLink>
		</div>
		<div @click="menuToggle()" class="menu">
			<Icon v-if="!menuValue" name="bars" />
			<Icon v-else name="xmark" />
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
	width: 100vw;
	max-width: $width;
	height: 6rem;


	position: relative;
	display: flex;
	flex-direction: column;
	position: relative;
	user-select: none;

	.logo{
		width: max-content;
		height: 100%;
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

			display: flex;
			.icon {
				fill: $white;
				width: 1rem;
				height: 1rem;
				margin-left: 1rem;
			}
		}
	}
	.menu{
		display: none;
		z-index: 3;	
		cursor: pointer;
		user-select: none;
	}
}

@media (max-width: $width) {
	header {
		padding: 5%;

		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		.links{
			display: none;
			&.show{
				display: flex;
			}
			transform: initial;
			// position: fixed;
			top: 6rem;
			padding: 0 5%;
			width: 100%;
			height: fit-content;
			left: 0;
			box-shadow: none;

			align-items: flex-start;
			flex-direction: column;
			justify-content: space-around;
			
			.link{
				width: max-content;
				height: 2rem;
				margin: 1rem 0;
				&::before{
					display: none;
				}				
			}
	
		}
		.menu {
			display: initial;
			width: 28px;
			height: 28px;
			svg {
				width: 28px;
				height: 28px;
				&.bars{
					fill: $primary;
				}
			}
			
		}
	}
}
@media (max-width: 45rem) {
	header {
		height: 5rem;
		.logo{
			h1{
				font-size: 1.5rem;
			}
			h2{
				font-size: 1rem;
			}
		}
		.links{
			top: 5rem;
		}
	}
}

</style>
