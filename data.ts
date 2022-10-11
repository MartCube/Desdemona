import type { link_T, equity_T, estate_T, member_T, article_T, video_T } from "~/types"

// Navbar Links
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
// Private Equity
export const equity: Array<equity_T> = [
	{
		poster: '/equity/villazzo.webp',
		logo: '/equity/villazzo.png',
		title: 'villazzo',
		link: 'https://www.villazzo.com/',
		description: 'Villazzo Investments is a partnership of elite investors that have taken advantage of the safe asset class of exclusive luxury residential real estate – the most lucrative way of investing money that Christian has attained over 15 years as an investor himself. Contact Christian if you are interested to learn more about this opportunity.',
	},
	{
		poster: '/equity/omp.webp',
		logo: '/equity/omp.png',
		title: 'one model place',
		link: 'https://www.onemodelplace.com/',
		description: 'With a network of over 200,000 active members, One Model Place is the top market place for models, photographers, and creative talents in fashion to look for work. Add your online modeling portfolio to OMP so that prospective clients can view and make direct bookings. Modeling profiles are completely customizable, allowing you to add your Instagram feed for potential clients to view.',
	},
	{
		poster: '/equity/the007.webp',
		logo: '/equity/the007.png',
		title: 'the 0.07%',
		link: 'https://www.the007percent.com/login',
		description: 'The 0.07% is a collective clique of jet set friends. We bring together the most beautiful people, the ultra-rich and the famous.Tap into our jet set circle and mingle with new friends. Get invited to billionaires’ villa parties and dinners, meet contacts at the highest echelon of society, wherever your travels take you. Join kindred spirits on luxurious trips and sip champagne on super yachts with attractive acquaintances.',
	},
	{
		poster: '/equity/top7.webp',
		logo: '/equity/top7.png',
		title: 'top7',
		link: 'https://www.top7.guide/',
		description: 'Tired of endless reviews, asking a friend when trying to look up favorite local bar, or restaurant? We were too! With Top7, we are looking to bring simplicity back. Only view the top 7 Restaurants, Bars & Clubs across most famous travel sites around the world. Build your search from google ratings, your friends ratings, and expert users. Your leaderboard based on how your network rated them. Create your lists and share it with friends.',
	},
	{
		logo: '/equity/hookah.png',
		title: 'hookah',
		description: 'We are developing a “cartridge-based” shisha system for “healthy smoking”, i.e., instead of smoke, you’re inhaling purified air with added oxygen. Our system is healthy and doesn’t cause lung, mouth, throat, stomach, kidney, pancreas, liver, or colon cancer that traditional tobacco base cigarettes can.',
	},
]
// Team Members
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
		position: 'CPA/CFO',
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
		position: 'Director of IT Investments',
		description: 'Arpad Dobos, J.D. is a highly organized Senior Manager with over 20 years of experience setting goals, timeline progress points, and operations scale and management strategies. Proven leader who defines and supervises team member roles and expectations while balancing conflicting priorities across multiple assignments. Excellent executive communication multilingual skills. Expertise in information technology, data analytics, and data privacy in both large organizations and startups. Arpad studied law at the University of Miskolc, the most prestigious law school in Hungary. He also co-founded a first-of-its kind sports analytics company in the U.S. that offered professional sports teams video tracking technology and insights to improve player performance.',
	},
]
// Real Estate
export const estate: Array<estate_T> = [
	{
		poster: '/estate/katafanga.webp',
		link: 'http://www.katafanga.com/',
		title: 'katafanga',
		subtitle: 'private island',
		description: 'Nestled in the heart of the South pacific, on a lush private island in the far reaches of Fiji, you will find Katafanga Island. Guests will enjoy a memorable vacation experience at this luxury resort, where the emphasis is on unparalleled personalized service, deliciously exciting cuisine, revitalizing spa treatments, and exquisite accommodations – all set amidst some of the most breathtaking scenery in the world',
	},
	{
		poster: '/estate/continuum.webp',
		link: 'https://www.continummsouthbeach.com/#initial',
		title: 'continuum',
		subtitle: 'south beach',
		description: 'Continuum South Beach is the new resort-style condominium in the impressive Miami Beach. With two astonishing towers and a total of 505 units, Continuum also boasts some of the most exclusive amenities like an infinity-edge lap pool, tennis courts, a fully equipped, three-story fitness center, and a sundeck, among others. This luxury development also has a one-of-kind beachfront location offering breathtaking views of the city, bay, and ocean',
	},
	{
		poster: '/estate/fivepark.webp',
		link: 'https://fivepark.com/',
		title: 'Five Park',
		subtitle: 'miami beach',
		description: "The newest luxury residential tower is coming to Miami Beach. With spectacular bay and ocean 360-degree views, this stunning creation from the world’s most visionary design minds features residences with vast balconies, lofty ceilings, and state-of-the-art appliances. The building has exceptional amenities across 50,000 square feet, including an onsite spa and wellness center. Additionally, residents have access to a private beach club and a three-acre park right outside the front door",
	},
	{
		poster: '/estate/murano.webp',
		link: 'https://www.muranogrande.com/',
		title: 'murano grande',
		subtitle: 'south beach',
		description: 'The Murano Grande at Portofino is an exceptional condo tower in the prestigious South of Fifth neighborhood of South Beach. Desdemona owns a combined, completely renovated front-to-back 5-bedroom unit of approx. 4000 sqft. Its close proximity to both prime beaches and world-class shopping and nightlife make it very easy to call home',
	},
]
// Press Video
export const pressVideos: Array<video_T> = [
	{
		poster: '/press/press1.webp',
		video: 'https://www.youtube.com/embed/AvYDYcrbHj0',
		title: 'TLC Four Houses',
	},
	{
		poster: '/press/press2.webp',
		video: 'https://www.youtube.com/embed/WJClHSWEj1I',
		title: 'Miami Mondaen',
	},
	{
		poster: '/press/press3.webp',
		video: 'https://www.youtube.com/embed/gUaEbPCrGLM',
		title: "Europe's Richest People",
	},
	{
		video: 'https://www.youtube.com/embed/Fq0fSZ3QDe0',
		title: 'Luxus und Laessigkeit in St. Tropez',
	},
]
// Press Articles
export const pressArticles: Array<article_T> = [
	{
		poster: '/press/private-islands.webp',
		title: 'Private Islands',
		link: 'katafanga island',
		description: 'After well over a decade of development, Katafanga Island – one of the most distinctive islands in Fiji, perhaps the world – is finally on the verge of welcoming its very first guests.'
	},
	{
		poster: '/press/prestige.webp',
		title: 'prestige',
		link: 'Vom Computer-Freak zum Millionär	',
		description: 'Während damals seine 13- und 14jährigen Altersgenossen gegen pubertäre Schübe und lästige Pflichten ankämpften, hat Christian Jagodzinski seine Leidenschaft für Computer entdeckt, diese ausgelebt, den ersten Online-Bookshop mit einer Datenbank von einer Million Buchtiteln erschaffen, mit Amazon ein lukratives Geschäft mitsamt dickem Aktienpaket unter Dach und Fach gebracht und wurde Millionär. Mit 16 Jahren erhielt er die Lizenz, seine eigene Firma zu gründen und war Deutschlands jüngster Firmeninhaber.'
	},
	{
		poster: '/press/florida.webp',
		title: 'florida international magazine',
		link: 'Christian Jagodzinski – Founder & President, Villazzo, Miami Beach',
		description: 'Entrepreneur and thrill–seeker Christian Jagodzinski has traveled to more than 25 countries in ultimate style, has practiced just about every sport known to a man and even flew a Russian fighter jet on a whim.'
	},
]