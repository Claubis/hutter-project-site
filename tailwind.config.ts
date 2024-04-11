import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        orelega: ['FonteOrelega', 'sans-serif'],
        sen: ['FonteSen', 'sans-serif'],
        manrope: ['FonteManrope', 'sans-serif'],
      },
      backgroundColor: {
        primeira: "#47667B",
        segunda: "#B0BEC5",
        terceira: "#CCCCCC",
        quarta: "#E0E0E0",
        quinta: "#F5F5F5",
        sexta: "#586368",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      colors: {
        'menu-hover': '#47667B',
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
};



export default config;
