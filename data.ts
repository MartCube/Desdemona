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
		poster: '/equity/007.png',
		title: 'the 0.07%',
		link: '/',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius recusandae error expedita fugiat id provident sunt repellat excepturi. Quisquam quas sapiente cupiditate? Nostrum repellat commodi a nisi, non quaerat consequuntur. Quisquam dolores inventore error, sint explicabo dignissimos quaerat nihil!',
	},
	{
		poster: '/equity/omp.png',
		title: 'One Model Place',
		link: '/',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius recusandae error expedita fugiat id provident sunt repellat excepturi. Quisquam quas sapiente cupiditate? Nostrum repellat commodi a nisi, non quaerat consequuntur. Quisquam dolores inventore error, sint explicabo dignissimos quaerat nihil!',
	},
	{
		poster: '/equity/top7.png',
		title: 'top7.Guide',
		link: '/',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius recusandae error expedita fugiat id provident sunt repellat excepturi. Quisquam quas sapiente cupiditate? Nostrum repellat commodi a nisi, non quaerat consequuntur. Quisquam dolores inventore error, sint explicabo dignissimos quaerat nihil!',
	},
	{
		poster: '/equity/hookah.png',
		title: 'HoO2kah',
		link: '/',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius recusandae error expedita fugiat id provident sunt repellat excepturi. Quisquam quas sapiente cupiditate? Nostrum repellat commodi a nisi, non quaerat consequuntur. Quisquam dolores inventore error, sint explicabo dignissimos quaerat nihil!',
	},
]

export const team: Array<member_T> = [
	{
		name: 'Christian Jagodzinski',
		position: 'Chairman & CEO',
		description: 'Christian continues to actively personally monitor and lead his numerous global investments. He was the founder of Villazzo and is the current CEO of the company. Christian divides his time between the primary Villazzo markets of Miami and St Tropez. Christian is fluent in English, French, German, and Spanish.',
	},
	{
		name: 'Jeannette Brandt',
		position: 'VP',
		description: 'Jeannette has an MBA and she is a Certified Community Association Manager. She has worked for large real estate firms overseeing luxury Condominium developments in South Beach. Jeannette oversees and manages all of Desdemona’s real estate holdings and is fluent in English and German.',
	},
	{
		name: 'Jarret Kaplan',
		position: 'CPA',
		description: 'Jarret Kaplan is an American attorney with a BS in Accounting and MS in Taxation. He received his Juris Doctorate from Florida International University College of Law in Miami, and has worked for Gidney & Co., C.P.A. and Mallah Furman C.P.A., specializing in a wide range of tax issues. He currently operates his own practice at Jarret W. Kaplan, P.A. and is a Florida licensed Certified Public Accountant, a Member of the Florida Bar, and was admitted to practice before the United States Tax Court in 2007. Jarret currently oversees all tax-related issues pertaining to Desdemona.',
	},
	{
		name: 'Ivonne Avendano',
		position: 'Executive Assistant',
		description: 'Ivonne graduated from Barry University with her B.A. in business management. Over the course of her career, she has worked in the capacities of bookkeeper and business manager for a diverse array of organizations, giving her a dynamic set of skills and expertise in her administrative role at Desdemona. Ivonne speaks both English and Spanish fluently.',
	},
	{
		name: 'Virginia Pellegrini',
		position: 'Marketing & IT Manager',
		description: 'Virginia holds her university degree in business administration and the travel industry from the accredited Management School at the University of Turin, and is currently combining her business and travel background with her skills in Information Technology. She brings a wide range of previous work experience in the travel and hospitality sectors to her role as Website and Marketing Manager for Villazzo, and also served as Corporate and Marketing Assistant as well, giving her the opportunity to work in virtually all of Villazzo’s operational departments. She speaks Italian, German, and English fluently.',
	},
	{
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
		title: '10 Palm Avenue',
		subtitle: 'Palm Island',
		description: "10 Palm Avenue can only be described as spectacular from just about every standpoint. The huge 11,000 sq ft (1,022 m²) villa, built in the Spanish Colonial style on exclusive Palm Island, has views across Biscayne Bay towards South Beach. A private dock, floating deck, dining terrace with bar, fridge and barbecue, an enormous 130 ft heated, walk-in pool with Jacuzzi, swim -in grotto and waterfall, are just some of the garden's features.Add a regulation beach volleyball court and a gym that new fitness clubs could equal and you only just begin to appreciate the extraordinary scope of this magnificent property.",
	},
	{
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
		title: 'Katafanga Island',
		subtitle: 'South Beach',
		description: 'Katafanga Island is a 225 acre white sand beach island in Fiji that is probably the closest thing to paradise that exists on this planet. It is strategically encircled by a natural 5,000 acre bioiluminescent turquoise blue lagoon and breathtaking sugar white beaches. It is one of the most developed islands in Fiji and the region and includes a runway, a ring road, a water reservoir, jetties and employee housing. 20 villas are currently under construction.',
	},
	{
		title: 'Murano Grande',
		subtitle: 'South Beach',
		description: 'The Murano Grande at Portofino is an exceptional condo tower in the prestigious South of Fifth neighborhood of South Beach. Desdemona owns a combined, completely renovated front-to-back 5-bedroom unit of approx. 4000 sqft. Its close proximity to both prime beaches and world-class shopping and nightlife make it very easy to call home.',
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