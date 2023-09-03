/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/notes/{markdownRemark.frontmatter__slug}.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

