// Navbar links
export interface link_T {
	name: string,
	url: string,
}
// Private Equity
export interface equity_T {
	title: string,
	link?: string,
	description: string,
	logo: string,
	poster?: string,
}
// Team Members
export interface member_T {
	image?: string,
	name: string,
	position: string,
	description: string,
}
// Real Estate
export interface estate_T {
	poster?: string,
	link?: string,
	title: string,
	subtitle: string,
	description: string,
}
// Contact Form
export interface ContactForm {
	name: string;
	email: string;
	number: number;
	message: string;
}
// Press
export interface video_T {
	title: string,
	poster?: string,
	video: string,
}
// Press Articles
export interface article_T {
	title: string,
	poster: string,
	link?: string,
	description?: string,
	text?: string[]
}