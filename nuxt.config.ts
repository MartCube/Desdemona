import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({

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

	modules: ['nuxt-icons'],

})