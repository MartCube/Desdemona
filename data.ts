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
		title: 'villazzo',
		link: 'https://www.villazzo.com/',
		description: 'Villazzo Investments is a partnership of elite investors that have taken advantage of the safe asset class of exclusive luxury residential real estate – the most lucrative way of investing money that Christian has attained over 15 years as an investor himself. Contact Christian if you are interested to learn more about this opportunity.',
	},
	{
		poster: '/equity/the007.png',
		title: 'the 007%',
		link: 'https://www.the007percent.com/login',
		description: 'The 0.07% is a collective clique of jet set friends. We bring together the most beautiful people, the ultra-rich and the famous.Tap into our jet set circle and mingle with new friends. Get invited to billionaires’ villa parties and dinners, meet contacts at the highest echelon of society, wherever your travels take you. Join kindred spirits on luxurious trips and sip champagne on super yachts with attractive acquaintances. Ours is a club everyone wants to be part of, but very few can join.Exclusive to accredited models and ultra-high-net-worth multi-millionaires, we operate a strict invite-only policy. To maintain the integrity of our inner circle, member’s credentials are personally vetted and approved for authenticity.As part of our network, you’ll gain instant access to our elite community and their exclusive events. Search profiles and make instant connections, host or join parties, soirees, and trips, in far-flung hotspots around the world.For friendship, for fun, for romance, for socializing or partying - for every corner of the well-heeled world.',
	},
	{
		poster: '/equity/omp.png',
		title: 'one model place',
		link: 'https://www.onemodelplace.com/',
		description: 'With a network of over 200,000 active members, One Model Place is the top market place for models, photographers, and creative talents in fashion to look for work. Add your online modeling portfolio to OMP so that prospective clients can view and make direct bookings. Modeling profiles are completely customizable, allowing you to add your Instagram feed for potential clients to view. So far, thousands of members have been scouted by industry professionals for both castings and work. Join our community as an OMP model to get started!',
	},
	{
		poster: '/equity/top7.png',
		title: 'top7',
		link: '/',
		description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga placeat dolorem nisi quae aliquid est porro consequuntur enim quis saepe.',
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
	{
		image: '/members/arpadd.webp',
		name: 'Arpad Dobos',
		position: 'Project Manager',
		description: 'Arpad Dobos, J.D. is a highly organized Project Manager with over 20 years of experience setting goals, timeline progress points, and operations scale and management strategies. Proven leader who defines and supervises team member roles and expectations while balancing conflicting priorities across multiple assignments. Excellent executive communication multilingual skills. Expertise in information technology, data analytics, and data privacy in both large organizations and startups. Arpad studied law at the University of Miskolc, the most prestigious law school in Hungary. He also co-founded a first-of-its kind sports analytics company in the U.S. that offered professional sports teams video tracking technology and insights to improve player performance.',
	},
]

export const estate: Array<estate_T> = [
	{
		poster: '/estate/katafanga.webp',
		link: 'http://www.katafanga.com/',
		title: 'katafanga',
		subtitle: 'private island',
		description: 'Nestled in the heart of the South pacific, on a lush private island in the far reaches of Fiji, you will find Katafanga Island Resort & Spa. Guests will enjoy a memorable vacation experience at this luxury resort, where the emphasis is on unparalleled personalized service, deliciously exciting cuisine, revitalizing spa treatments, and exquisite accommodations – all set amidst some of the most breathtaking tropical scenery in the world',
	},
	{
		poster: '/estate/continuum.webp',
		link: 'https://www.continummsouthbeach.com/#initial',
		title: 'continuum',
		subtitle: 'south beach',
		description: 'Continuum South Beach is the new resort-style condominium in the impressive Miami Beach. With two astonishing towers and a total of 505 units, Continuum also boasts some of the most exclusive amenities like an infinity-edge lap pool, tennis courts, a fully equipped, three-story fitness center, and a sundeck, among others. This luxury development also has a one-of-kind beachfront location offering breathtaking views of the city, bay, and ocean.',
	},
	{
		poster: '/estate/fivepark.webp',
		link: 'https://fivepark.com/',
		title: 'Five Park',
		subtitle: 'miami beach',
		description: "The newest luxury residential tower is coming to Miami Beach. With spectacular bay and ocean 360-degree views, this stunning creation from the world’s most visionary design minds features residences with vast balconies, lofty ceilings, and state-of-the-art appliances. The building has exceptional amenities across 50,000 square feet, including an onsite spa and wellness center. Additionally, residents have access to a private beach club and a three-acre park right outside the front door.",
	},
	{
		poster: '/estate/murano.webp',
		link: 'https://www.muranogrande.com/',
		title: 'murano grande',
		subtitle: 'south beach',
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