import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2C6AA5",
          foreground: "#FFFFFF"
        },
        accent: "#00C2FF"
      },
      fontFamily: {
        sans: ["Geist Sans", "sans-serif"],
        mono: ["Geist Mono", "monospace"]
      }
    }
  },
  plugins: []
}
export default config
