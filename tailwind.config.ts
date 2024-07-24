import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        darkGreen: "#72764b",
        lightGreen: "#9eb767",
        softGreen: "#eff3d4",
        beige: "#fcf7ed",
        pink: "#f1b5bb",
        orange: "#e67231",
        bordeaux: "a6454b",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
} satisfies Config;

export default config;
