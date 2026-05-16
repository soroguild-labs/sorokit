import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172026",
        mist: "#eef4f7",
        stellar: "#4f6df5",
        signal: "#18a999",
        amberline: "#f3b23c"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(23, 32, 38, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
