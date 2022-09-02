import type { press_T, equity_T, link_T, estate_T, member_T } from "~/types"

export const links: Array<link_T> = [
	{
		name: 'Home',
		url: '/'
	},
	{
		name: 'CEO',
		url: '/ceo'
	},
	{
		name: 'Private Equity',
		url: '/private-equity'
	},
	{
		name: 'Team',
		url: '/team'
	},
	{
		name: 'Real Estate',
		url: '/real-estate'
	},
	{
		name: 'Press',
		url: '/press'
	},
]

export const equity: Array<equity_T> = [
	{
		poster: '/equity/hookah.png',
		title: 'hookah',
		link: '/',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga placeat dolorem nisi quae aliquid est porro consequuntur enim quis saepe.',
	},
	{
		poster: '/equity/omp.png',
		title: 'omp',
		link: '/',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, illum necessitatibus? Tempora eligendi illo praesentium aliquam delectus, recusandae dolore perferendis, fuga autem beatae consequuntur a exercitationem libero numquam architecto vitae!',
	},
	{
		poster: '/equity/the007.png',
		title: 'the 007',
		link: '/',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nam consequatur, laborum fugiat voluptas adipisci veniam deserunt? Numquam, dicta error? A, laudantium minus recusandae itaque possimus harum qui numquam illo debitis cupiditate eos inventore nostrum impedit molestias facilis asperiores magnam?',
	},
	{
		poster: '/equity/top7.png',
		title: 'top 7',
		link: '/',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores alias tenetur, vitae dignissimos, provident id sed cumque recusandae nesciunt magni a laborum inventore eligendi saepe repellat. Blanditiis eligendi laboriosam optio possimus ea quisquam non, dolores, fugit eius harum deleniti repudiandae.',
	},
]

export const team: Array<member_T> = [
	{
		image: '/members/cjagodzinski.webp',
		name: 'Christian Jagodzinski',
		position: 'Chairman & CEO',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga placeat dolorem nisi quae aliquid est porro consequuntur enim quis saepe.',
	},
	{
		image: '/members/jbrandt.webp',
		name: 'Jeannette Brandt',
		position: 'VP',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, illum necessitatibus? Tempora eligendi illo praesentium aliquam delectus, recusandae dolore perferendis, fuga autem beatae consequuntur a exercitationem libero numquam architecto vitae!',
	},
	{
		image: '/members/jkaplan.webp',
		name: 'Jarret Kaplan',
		position: 'CPA',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nam consequatur, laborum fugiat voluptas adipisci veniam deserunt? Numquam, dicta error? A, laudantium minus recusandae itaque possimus harum qui numquam illo debitis cupiditate eos inventore nostrum impedit molestias facilis asperiores magnam?',
	},
	{
		image: '/members/iavendano.webp',
		name: 'Ivonne Avendano',
		position: 'Executive Assistant',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nam consequatur, laborum fugiat voluptas adipisci veniam deserunt? Numquam, dicta error? A, laudantium minus recusandae itaque possimus harum qui numquam illo debitis cupiditate eos inventore nostrum impedit molestias facilis asperiores magnam?',
	},
	{
		image: '/members/vpellegrini.webp',
		name: 'Virginia Pellegrini',
		position: 'Marketing & IT Manager',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nam consequatur, laborum fugiat voluptas adipisci veniam deserunt? Numquam, dicta error? A, laudantium minus recusandae itaque possimus harum qui numquam illo debitis cupiditate eos inventore nostrum impedit molestias facilis asperiores magnam?',
	},
	{
		image: '/members/gschoenthaler.webp',
		name: 'Gabriela Schoenthaler',
		position: 'Marketing & IT Manager',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nam consequatur, laborum fugiat voluptas adipisci veniam deserunt? Numquam, dicta error? A, laudantium minus recusandae itaque possimus harum qui numquam illo debitis cupiditate eos inventore nostrum impedit molestias facilis asperiores magnam?',
	},

]

export const estate: Array<estate_T> = [
	{
		title: 'Villazzo',
		subtitle: 'Investments',
		description: 'Villazzo Investments is a partnership of elite investors that have taken advantage of the safe asset class of exclusive luxury residential real estate – the most lucrative way of investing money that Christian has attained over 15 years as an investor himself.',
	},
	{
		poster: '/estate/contenta.webp',
		title: '10 Palm Avenue',
		subtitle: 'Palm Island',
		description: "10 Palm Avenue can only be described as spectacular from just about every standpoint. The huge 11,000 sq ft (1,022 m²) villa, built in the Spanish Colonial style on exclusive Palm Island, has views across Biscayne Bay towards South Beach. A private dock, floating deck, dining terrace with bar, fridge and barbecue, an enormous 130 ft heated, walk-in pool with Jacuzzi, swim -in grotto and waterfall, are just some of the garden's features.",
	},
	{
		poster: '/estate/murano.webp',
		title: 'Murano Grande',
		subtitle: 'South Beach',
		description: 'The Murano Grande at Portofino is an exceptional condo tower in the prestigious South of Fifth neighborhood of South Beach. Desdemona owns a combined, completely renovated front-to-back 5-bedroom unit of approx. 4000 sqft. Its close proximity to both prime beaches and world-class shopping and nightlife make it very easy to call home.',
	},
	{
		title: '81 Washington Avenue',
		subtitle: 'South Beach',
		description: 'One of the few original Art Deco buildings left in the prestigious South of Fifth neighborhood, 81 Washington combines over 14,000 square feet of interior space with a big outdoor garden. It houses a gourmet restaurant and offices.',
	},
	{
		poster: '/estate/katafanga.webp',
		title: 'Katafanga Island',
		subtitle: 'South Beach',
		description: 'Katafanga Island is a 225 acre white sand beach island in Fiji that is probably the closest thing to paradise that exists on this planet. It is strategically encircled by a natural 5,000 acre bioiluminescent turquoise blue lagoon and breathtaking sugar white beaches. It is one of the most developed islands in Fiji and the region and includes a runway, a ring road, a water reservoir, jetties and employee housing. 20 villas are currently under construction.',
	},
	{
		title: 'Katafanga Island',
		subtitle: 'South Beach',
		description: 'Katafanga Island is a 225 acre white sand beach island in Fiji that is probably the closest thing to paradise that exists on this planet. It is strategically encircled by a natural 5,000 acre bioiluminescent turquoise blue lagoon and breathtaking sugar white beaches. It is one of the most developed islands in Fiji and the region and includes a runway, a ring road, a water reservoir, jetties and employee housing. 20 villas are currently under construction.',
	},
]

export const press: Array<press_T> = [
	{
		video: 'https://www.youtube.com/embed/AvYDYcrbHj0',
		title: 'TLC Four Houses',
	},
	{
		video: 'https://www.youtube.com/embed/Fq0fSZ3QDe0',
		title: 'Luxus und Laessigkeit in St. Tropez',
	},
	{
		video: 'https://www.youtube.com/embed/WJClHSWEj1I',
		title: 'Miami Mondaen',
	},
	{
		video: 'https://www.youtube.com/embed/gUaEbPCrGLM',
		title: "Europe's Richest People",
	}
]