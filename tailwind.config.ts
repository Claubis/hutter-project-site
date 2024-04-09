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
        segunda: "#6D8B89",
        terceira: "#A5C3A7",
        quarta: "#D5E0B5",
        quinta: "#F8F4C4",
        sexta: "#FFFFFF",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
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
