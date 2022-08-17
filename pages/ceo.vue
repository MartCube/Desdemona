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
				<p>There are a countless number of businesses and entrepreneurs in the world today, but few can claim to have successfully launched as many groundbreaking business concepts as Christian Jagodzinski. A true child prodigy, Christian’s early passion for computer technology in the 1980s led he and his first business partner Michael J.G. Gleissner to start what would become Telebook, Germany’s first and largest fully automated online book retailer.</p>
			</div>
			<div class="image"></div>
		</div>
		<div class="wrap reverse">
			<div class="image"></div>
			<div class="text">
				<p>While the Internet gold rush is typically recognized as beginning in 1995, the beginnings of Christian and Michael’s company date back as early of 1985. For this reason, when the mainstream popularity of the Internet finally broke in the mid 90s, Telebook was already way ahead of the industry curve for e-commerce, leading Amazon to take notice. In early 1998, Amazon made an offer to buy out Telebook, and in April of 1998, Amazon.com acquired Telebook in a stock-swap.</p>
				<p>Christian stayed on as an Amazon executive for about a year, but being a cog in the wheel of a multi-national company like Amazon didn’t present him with the challenge he had been used to. He left Amazon to travel the globe in luxury and take a much-deserved break from the fast-paced world of building up and running a successful business.</p>
			</div>
		</div>
		<div class="wrap">
			<div class="text">
				<p>Throughout his travels, however, Christian was never able to find a vacation experience that lived up to his expectations for what “luxury” is to him: Whether he was staying in a 5-star hotel or a small luxury boutique hotel, neither format ever turned out to be as personalized and custom-tailored to his needs as a luxury traveler.</p>
			</div>
			<div class="video"></div>
		</div>
		<div class="wrap">
			<p>The same was true for renting private luxury villas – more often than not, the villas themselves turned out to be much less than what they were promised to be. And of course, the luxury villa option lacked any kind of professional hotel-like management approach. From this disappointment, Christian saw a new opportunity: create a reliable “brand name” luxury villa rental company that combined the finest properties and destinations with true 5-star hotel management and personal services that could be customer-tailored to the travelers needs and desires. This was the idea that led him to create Villazzo, the only true "five star hotel operator" for private luxury residences in the world today.</p>
			<p>Over the years, Christian thus became an expert of the super-luxury residential real estate market like nobody else. He understood how to optimize maintenance costs, adjust short-term rental rates, and maximize performance of an asset class that everyone struggles to make profitable. Being at home in Miami Beach and St Tropez, this experience led him to invest in properties there and learn to play the ebb and flow of a highly lucrative real estate market to his advantage. Together with Villazzo and Desdemona, Christian Jagodzinski once again finds himself on the cutting edge of an exciting industry. </p>
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
		align-items: flex-end;
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

		&:last-of-type{
			flex-direction: column;
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
				
			}
			.image,
			.video {
				width:100%;
				height: 25rem;
				max-width: initial;
				margin-top: 2rem;
			}
			p{
				font-size: 0.9rem;
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