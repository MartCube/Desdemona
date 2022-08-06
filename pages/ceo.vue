<template>
	<div class="page">
		<div class="wrap">
			<div class="bg"></div>
			<div class="text">
				<h3>who we are</h3>
				<h1>Desdemona</h1>
				<h2>Capital</h2>
				<span>The investment arms of Christian Jagodzinski</span>
				<p>From the vanguard of Internet Technology to an unparalleled vision for luxury vacationing, entrepreneurial visionary Christian Jagodzinski remains on the cutting edge of all his business endeavors.</p>
				<p>Michael J.G. Gleissner to start what would become Telebook, Germany’s first and largest fully automated online book retailer.</p>
			</div>
			<div class="image"></div>
		</div>
		<div class="wrap reverse">
			<div class="image"></div>
			<div class="text">
				<p>While the Internet gold rush is typically recognized as beginning in 1995, the beginnings of Christian and Michael’s company date back as early of 1985. For this reason, when the mainstream popularity of the Internet finally broke in the mid 90s, Telebook was already way ahead of the industry curve for e-commerce, leading Amazon to take notice. In early 1998, Amazon made an offer to buy out Telebook, and in April of 1998, Amazon.com acquired Telebook in a stock-swap.</p>
				<p>Amazon didn’t present him with the challenge. He left Amazon to travel the globe in luxury and take a much-deserved break from the fast-paced world of building up and running a successful business.</p>
			</div>
		</div>
		<div class="wrap">
			<div class="text">
				<p>While leading Amazon to take notice offer to buy out Telebook, and in April of 1998, Amazon.com acquired Telebook in a stock-swap.the beginnings of Christian and Michael’s company date back as early of 1985. For this reason, when the mainstream popularity of the Internet finally broke in the mid 90s, Telebook was already way ahead of the industry curve for e-commerce, leading Amazon to take notice. And of course, In early 1998, Amazon made an offer.</p>
			</div>
			<div class="video"></div>
		</div>
		<div class="wrap">
			<p>Throughout his travels, however, Christian was never able to find a vacation experience that lived up to his expectations for what “luxury” is to him: Whether he was staying in a 5-star hotel or a small luxury boutique hotel, neither format ever turned out to be as personalized and custom-tailored to his needs as a luxury traveler. The same was true for renting private luxury villas – more often than not, the villas themselves turned out to be much less than what they were promised to be. And of course, the luxury villa option lacked any kind of professional hotel-like management approach. From this disappointment, Christian saw a new opportunity: create a reliable “brand name” luxury villa rental company that combined the finest properties and destinations with true 5-star hotel management and personal services that could be customer-tailored to the travelers needs and desires. This was the idea that led him to create Villazzo, the only true "five star hotel operator" for private luxury residences in the world today.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({
 	title: 'CEO',
})
</script>

<style lang="scss" scoped>
.page{
	width: 100%;
	max-width: $width;
	margin-top: 10rem;
	.wrap{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 2.5rem;
		.text{
			width: 45%;
			color: $title;
			h3 { 
				margin-bottom: 1rem;

				display: flex;
				align-items: center;

				text-transform: capitalize;
				color: $primary;
				font-size: 1.5rem;
				font-weight: 300;
				&:before{
					content: '';
					width: 2.5rem;
					height: 2px;
					margin-right: 1rem;
					background: $primary;
				}
			}
			h1{
				margin-bottom: 0.5rem;
				text-transform: uppercase;
				font-size: 3rem;
				font-weight: 700;
				&::first-letter{
					color: $primary;
				}
			}
			h2{
				margin-bottom: 2rem;
				text-transform: uppercase;
				font-size: 2rem;	
				font-weight: 300;
				&::first-letter{
					color: $primary;
				}
			}
			span {
				color: $primary;
				display: block;
				margin-bottom: 2rem;
			}
			p {
				line-height: 2rem;
				margin-bottom: 2rem;

				&:last-child{
					margin:0;
				}
			}
		}
		.image{
			width: 50%;
			height: 30rem;
			background: $dark-grey;
		}
		.video{
			width: 50%;
			height: 17rem;
			background: $dark-grey;

		}

		p {
			line-height: 2rem;
			margin-bottom: 2rem;
		}
	}
}

@media (max-width: $width) {
	.page{
		margin: 0;
		max-width: initial;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		
		.wrap{
			margin: 0;
			padding: 5vw 5vw 0 5vw;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;

			position: relative;
			.bg {
				z-index: -1;
				width: 100%;
				height: calc(100% - 12.5rem);
				position: absolute;
				background: $grey;
				top: 0;
				left: 0;
			}
			&.reverse{
				flex-direction: column-reverse;
			}
			.text{
				width:100%;
				max-width: initial;
				h3{
					margin-top: 2rem;
					margin-bottom: 1rem;
					font-size: 1rem;
				}
				h1{
					font-size: 2rem;
					
				}
				h2{
					font-size: 1.5rem;
					
				}
				p{
					font-size: 0.9rem;
				}
			}
			.image,
			.video {
				width:100%;
				height: 25rem;
				max-width: initial;
				margin-top: 2rem;
			}
		}
	}
}

@media (max-width: 45rem) {
.page{
	.wrap{
		.bg{
			height: calc(100% - 7.5rem);
		}
		.image,
		.video {
			height: 15rem;
		}
	}
}
}
</style>