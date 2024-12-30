/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Plus Jakarta Sans", "sans-serif"],
			},
			colors: {
				beige: "#f5ebe0",
				medium: "#d5bdaf",
				dark: "#6c584c",
			},
		},
	},
	plugins: [],
};
