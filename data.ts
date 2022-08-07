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
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quia sapiente quam hic, iure sint impedit vero nemo doloribus iste!',
	},
	{
		name: 'Jeannette Brandt',
		position: 'VP',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quia sapiente quam hic, iure sint impedit vero nemo doloribus iste!',
	},
	{
		name: 'Jarret Kaplan',
		position: 'CPA',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quia sapiente quam hic, iure sint impedit vero nemo doloribus iste!',
	},

]

export const estate: Array<estate_T> = [
	{
		title: 'katafanga',
		subtitle: 'private island',
		description: 'Katafanga Island is a 225 acre white sand beach island in Fiji that is probably the closest thing to paradise that exists on this planet. It is strategically encircled by a natural 5,000 acre bioiluminescent turquoise blue lagoon and breathtaking sugar white beaches. It is one of the most developed islands in Fiji and the region and includes a runway, a ring road, a water reservoir, jetties and employee housing. 20 villas are currently under construction.',
	},
	{
		title: 'Continuum',
		subtitle: 'South Beach',
		description: 'The Murano Grande at Portofino is an exceptional condo tower in the prestigious South of Fifth neighborhood of South Beach. Desdemona owns a combined, completely renovated front-to-back 5-bedroom unit of approx. 4000 sqft. Its close proximity to both prime beaches and world-class shopping and nightlife make it very easy to call home.',
	},
	{
		title: '10 Palm Avenue',
		subtitle: 'Miami',
		description: '10 Palm Avenue can only be described as spectacular from just about every standpoint. The huge 11,000 sq ft (1,022 m²) villa, built in the Spanish Colonial style on exclusive Palm Island, has views across Biscayne Bay towards South Beach.',
	},
]

export const press: Array<press_T> = [
	{
		video: 'https://www.youtube.com/embed/AvYDYcrbHj0',
		author: 'derek l. coronado',
		title: 'TLC Four Houses',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iste sunt itaque nam porro, amet quidem assumenda tempore provident.',
	},
	{
		video: 'https://www.youtube.com/embed/Fq0fSZ3QDe0',
		author: 'jeremy D. anderson',
		title: 'Luxus und Laessigkeit in St. Tropez',
		description: 'Lorem ipsum dolor sit amet consectetur sit amet adipisicing elit. Eveniet odit fugiat voluptas adipisicing elit. Eveniet odit fugiat voluptas',
	},
	{
		video: 'https://www.youtube.com/embed/WJClHSWEj1I',
		author: 'jeremy D. anderson',
		title: 'Miami Mondaen',
		description: 'Lorem ipsum dolor sit amet consectetur sit amet adipisicing elit. Eveniet odit fugiat voluptas adipisicing elit. Eveniet odit fugiat voluptas',
	}
]