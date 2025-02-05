/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

export default {
	darkMode: ['class'],
	content: { files: ['./src/**/*.{js,jsx,ts,tsx}'], extract },
	theme: {
		screens, // Tailwind's default screens, in `rem`
		fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
		extend: {
			backgroundColor: {
				primary: '#EFF6F4', // Custom primary background color
				secondary: '#33C1FF', // Custom secondary background color
				'fade-top':
					'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
				'fade-bottom':
					'linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
			},
			fontFamily: {
				sans: ['"Source Sans 3"', 'sans-serif'],
				GilroyExtraBold: ['Gilroy-ExtraBold', 'sans-serif'],
				MontserratBlack: ['Montserrat-Black', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				green: {
					light: '#88E7CD', // Custom green color
				},
				title:{
					primary: 'text-red-800',
					secondary: 'text-red-600',
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: '#88E7CD',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
			},
		},
	},
	plugins: [
		fluid,
		require('tailwindcss-animate'),
		require('tailwind-scrollbar'),
	],
};
