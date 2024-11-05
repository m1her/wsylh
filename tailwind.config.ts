import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["var(--font-cairo)"],
      },
      colors: {
        primary: "#3c5097",
        secondary: "#58b8fe",
      },
    },
  },
  plugins: [],
};
export default config;
