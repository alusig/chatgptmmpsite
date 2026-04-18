import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A1628",
          teal: "#00D4B8",
          tealDark: "#00BFA5",
          slate: "#F8F9FA",
        },
      },
      borderRadius: {
        xl2: "1rem",
        xl3: "1.5rem",
      },
      boxShadow: {
        soft: "0 12px 35px rgba(10,22,40,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
