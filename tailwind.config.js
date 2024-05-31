/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.html"],
	theme: {
		fontFamily: {
			patrick: ["Patrick Hand", "cursive"],
		},
		extend: {
			colors: {
				brand: {
					black: {
						100: "#374151",
						200: "#111827",
						300: "#4B5563",
					},
				},
			},
		},
	},
	plugins: [],
};
