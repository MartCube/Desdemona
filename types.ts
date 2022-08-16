export interface link_T {
	name: string,
	url: string,
}

export interface equity_T {
	title: string,
	link: string,
	poster?: string,
	description: string,
}

export interface estate_T {
	poster?: string,
	title: string,
	subtitle: string,
	description: string,
}

export interface member_T {
	image?: string,
	name: string,
	position: string,
	description: string,
}

export interface ContactForm {
	name: string;
	email: string;
	phone: number;
	message: string;
}

export interface press_T {
	video?: string,
	poster?: string,
	author?: string,
	title: string,
	description?: string,
}