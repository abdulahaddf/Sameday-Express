import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#122c5f",
          mid: "#0d1f3c",
          light: "#1a2f5e",
        },
        accent: {
          cyan: "#00c2cb",
          teal: "#00b4d8",
          orange: "#e84c1e",
        },
        grey: {
          light: "#f4f6f9",
          text: "#94a3b8",
        },
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
