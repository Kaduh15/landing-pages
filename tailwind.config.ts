import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      boxShadow: {
        rose: '0px 9px 25px 0px #E51D371A',
      },
      backgroundImage: {
        wave: 'url("/wave.svg")',
      },
    },
  },
  plugins: [],
}
export default config
