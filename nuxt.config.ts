import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({

	ssr: false,
	target: 'static',

	app: {
		head: {
			title: 'Desdemona Capital',
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
		}
	},

	webpack: {
		analyze: {
			analyzerMode: 'static'
		}
	},

	css: ["@/assets/main.scss"],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/colors.scss";',
				},
			},
		},
	},

})