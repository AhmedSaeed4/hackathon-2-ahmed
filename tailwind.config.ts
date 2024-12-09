import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
  			xs: '390px'
  		},
      fontFamily: {
  			sans: ["system-ui", "sans-serif"],
  			satoshi: ["var(--font-satoshi)", "sans-serif"],
  			clash: ["var(--font-clash)", "sans-serif"],
  			integral: 'var(--font-integral-cf)'
  		},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
