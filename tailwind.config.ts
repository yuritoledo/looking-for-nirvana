import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fade 500ms ease-in-out",
        toLeft: "toLeft 500ms ease-in-out",
        toRight: "toRight 500ms ease-in-out",
      },

      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        toLeft: {
          "0%": { opacity: "0", transform: "translateX(15px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
        toRight: {
          "0%": { opacity: "0", transform: "translateX(-15px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [],
}
export default config
