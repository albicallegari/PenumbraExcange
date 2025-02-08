import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Devanagari Sangam', 'sans-serif'],
        headline: ['Faktum', 'sans-serif'],
        /* Using Iosevka Term rather than Iosevka ensures that all characters are really the same width, even weird unicode ones. */
        mono: ['Iosevka Term', 'monospace'],
      },
      colors: {
        'black-alt': '#0D0D0D',
        'secondary': '#A3A3A3',
        'light-gray': '#FAFAFA',
        'penumbra-light-blue': '#53AEA8',
        'penumbra-light-orange': '#FA9C43',
        'penumbra-orange': '#BA4D14',
        'light-gray-2': 'rgba(250, 250, 250, 0.05)',
      },
    },
  },
  plugins: [],
} satisfies Config;
