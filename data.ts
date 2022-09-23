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
		poster: '/equity/the007.png',
		title: 'the 007',
		link: '/',
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque nam consequatur, laborum fugiat voluptas adipisci veniam deserunt? Numquam, dicta error? A, laudantium minus recusandae itaque possimus harum qui numquam illo debitis cupiditate eos inventore nostrum impedit molestias facilis asperiores magnam?',
	},
	{
		poster: '/equity/omp.png',
		title: 'omp',
		link: '/',
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, illum necessitatibus? Tempora eligendi illo praesentium aliquam delectus, recusandae dolore perferendis, fuga autem beatae consequuntur a exercitationem libero numquam architecto vitae!',
	},
	{
		poster: '/equity/top7.png',
		title: 'top 7',
		link: '/',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores alias tenetur, vitae dignissimos, provident id sed cumque recusandae nesciunt magni a laborum inventore eligendi saepe repellat. Blanditiis eligendi laboriosam optio possimus ea quisquam non, dolores, fugit eius harum deleniti repudiandae.',
	},
	{
		poster: '/equity/hookah.png',
		title: 'hookah',
		link: '/',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga placeat dolorem nisi quae aliquid est porro consequuntur enim quis saepe.',
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
		image: '/members/jkaplan.webp',
		name: 'Jarret Kaplan',
		position: 'CPA',
		description: 'Jarret Kaplan is an American attorney with a BS in Accounting and MS in Taxation. He received his Juris Doctorate from Florida International University College of Law in Miami, and has worked for Gidney & Co., C.P.A. and Mallah Furman C.P.A., specializing in a wide range of tax issues. He currently operates his own practice at Jarret W. Kaplan, P.A. and is a Florida licensed Certified Public Accountant, a Member of the Florida Bar, and was admitted to practice before the United States Tax Court in 2007. Jarret currently oversees all tax-related issues pertaining to Desdemona.',
	},
	{
		image: '/members/iavendano.webp',
		name: 'Ivonne Avendano',
		position: 'Executive Assistant',
		description: 'Ivonne graduated from Barry University with her B.A. in business management. Over the course of her career, she has worked in the capacities of bookkeeper and business manager for a diverse array of organizations, giving her a dynamic set of skills and expertise in her administrative role at Desdemona. Ivonne speaks both English and Spanish fluently.',
	},
]

export const estate: Array<estate_T> = [
	{
		poster: '/estate/katafanga.webp',
		title: 'katafanga',
		subtitle: 'private island',
		description: 'Nestled in the heart of the South pacific, on a lush private island in the far reaches of Fiji, you will find Katafanga Island Resort & Spa. Guests will enjoy a memorable vacation experience at this luxury resort, where the emphasis is on unparalleled personalized service, deliciously exciting cuisine, revitalizing spa treatments, and exquisite accommodations – all set amidst some of the most breathtaking tropical scenery in the world',
	},
	{
		poster: '/estate/continuum.webp',
		title: 'continuum',
		subtitle: 'south beach',
		description: 'Continuum South Beach is the new resort-style condominium in the impressive Miami Beach. With two astonishing towers and a total of 505 units, Continuum also boasts some of the most exclusive amenities like an infinity-edge lap pool, tennis courts, a fully equipped, three-story fitness center, and a sundeck, among others. This luxury development also has a one-of-kind beachfront location offering breathtaking views of the city, bay, and ocean.',
	},
	{
		poster: '/estate/fivepark.webp',
		title: 'Five Park',
		subtitle: 'miami beach',
		description: "The newest luxury residential tower is coming to Miami Beach. With spectacular bay and ocean 360-degree views, this stunning creation from the world’s most visionary design minds features residences with vast balconies, lofty ceilings, and state-of-the-art appliances. The building has exceptional amenities across 50,000 square feet, including an onsite spa and wellness center. Additionally, residents have access to a private beach club and a three-acre park right outside the front door.",
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