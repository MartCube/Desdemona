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
	phone: number;
	message: string;
}
// Press
export interface press_T {
	video?: string,
	poster?: string,
	author?: string,
	title: string,
	description?: string,
}