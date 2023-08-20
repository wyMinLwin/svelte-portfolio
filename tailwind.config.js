/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
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

