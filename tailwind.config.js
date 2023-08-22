/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "main":"#10172A",
        "text":"#E2E8F0",
        "muted":"#6C798E",
        "secondary":"#55d4c2",
        "heightlight":"#A3A9B5",
        "dark-main":"#121212",
        "emerald-main":"#27ae60",
        "dark-text":"#161616",
        "light": {
          "shade-1":"#fafafa",
          "shade-2":"#f2f2f2",
          "shade-3":"#f7f7f9",
        }
      }
    },
  },
  plugins: [],
}

