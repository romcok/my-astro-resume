const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			// sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [require("@tailwindcss/typography"), require('daisyui')],
	// https://tailwindcss.com/docs/content-configuration#safelisting-classes
	safelist: [
		{
			pattern: /text-.+/
		},
		{
			pattern: /border-.+/
		}
	]
}
