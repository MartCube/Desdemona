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
		poster: '/equity/villazzo.png',
		title: 'Villazzo',
		link: '/',
		description: 'In 2004, Villazzo introduced a new concept into the hospitality market called a  VillaHotel. VillaHotels combine the accessories and services of a five-star hotel with spectacular, hand-picked luxury homes, giving you a level of personalized service, attention to detail, and privacy that cannot be found elsewhere. Villazzo offers VillaHotels in in St. Tropez, Miami, Paris and beyond.',
	},
	{
		poster: '/equity/omp.png',
		title: 'One Model Place',
		link: '/',
		description: 'One Model Place is an online community for models, photographers, and creative talents with almost 200,000 active members. One Model Place started in 1997 and has grown to a thriving company with over 20 employees working on designing, programming, and overseeing the day-to-day activities on the site. OMP is a privately-owned corporation.',
	},
	{
		poster: '/equity/nikkibeach.png',
		title: 'Nikki Beach',
		link: '/',
		description: "Desdemona Capital is one of the founding partners of Nikki Beach Saint-Tropez.Nikki Beach Saint-Tropez is world renowned for its surreal beauty and ambiance. It is one of the few places on the planet where one can simultaneously enjoy champagne & cocktails at noon, accompanied by contemporary European delights & mood enhancing tunes.",
	},
]

export const team: Array<member_T> = [
	{
		image: '/members/cjagodzinski.webp',
		name: 'Christian Jagodzinski',
		position: 'Chairman & CEO',
		description: 'Christian continues to actively personally monitor and lead his numerous global investments. He was the founder of Villazzo and is the current CEO of the company. Christian divides his time between the primary Villazzo markets of Miami and St Tropez. Christian is fluent in English, French, German, and Spanish.',
	},
	{
		image: '/members/jbrandt.webp',
		name: 'Jeannette Brandt',
		position: 'VP',
		description: 'Jeannette has an MBA and she is a Certified Community Association Manager. She has worked for large real estate firms overseeing luxury Condominium developments in South Beach. Jeannette oversees and manages all of Desdemona’s real estate holdings and is fluent in English and German.',
	},
	{
		image: '/members/jkaplan.webp',
		name: 'Jarret Kaplan',
		position: 'CPA',
		description: 'Jarret Kaplan is an American attorney with a BS in Accounting and MS in Taxation. He received his Juris Doctorate from Florida International University College of Law in Miami, and has worked for Gidney & Co., C.P.A. and Mallah Furman C.P.A., specializing in a wide range of tax issues.',
	},
	{
		image: '/members/iavendano.webp',
		name: 'Ivonne Avendano',
		position: 'Executive Assistant',
		description: 'Ivonne graduated from Barry University with her B.A. in business management. Over the course of her career, she has worked in the capacities of bookkeeper and business manager for a diverse array of organizations, giving her a dynamic set of skills and expertise in her administrative role at Desdemona. Ivonne speaks both English and Spanish fluently.',
	},
	{
		image: '/members/vpellegrini.webp',
		name: 'Virginia Pellegrini',
		position: 'Marketing & IT Manager',
		description: 'Virginia holds her university degree in business administration and the travel industry from the accredited Management School at the University of Turin, and is currently combining her business and travel background with her skills in Information Technology. She brings a wide range of previous work experience in the travel and hospitality sectors to her role as Website and Marketing Manager for Villazzo, and also served as Corporate and Marketing Assistant as well, giving her the opportunity to work in virtually all of Villazzo’s operational departments. She speaks Italian, German, and English fluently.',
	},
	{
		image: '/members/gschoenthaler.webp',
		name: 'Gabriela Schoenthaler',
		position: 'Marketing & IT Manager',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quia sapiente quam hic, iure sint impedit vero nemo doloribus iste!',
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