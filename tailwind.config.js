import { nextui } from '@nextui-org/react';
import tailwindColors, { transparent } from 'tailwindcss/colors.js';
import colors from './src/theme/colors';
import screensSizes from './src/theme/screensSizes';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			...tailwindColors,
			...colors
		},
		screens: { ...screensSizes },
		extend: {
			colors: {
				primary: colors.primary,
				secondary: colors.secondary,
				success: colors.success,
				warning: colors.warning,
				danger: colors.warning,
				blackTransparent: colors['black-transparent']
			}
		}
	},
	plugins: [nextui()]
};
