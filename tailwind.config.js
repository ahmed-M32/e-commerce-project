/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '5px 5px 10px  gray',
			  }
		},
	},
	plugins: [],
};
