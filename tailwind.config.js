/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#737854",
          BACKGROUND: "#DBDECF",
          50: "#ffffff",
          100: "#f1f2ee",
          200: "#e3e4dd",
          300: "#d5d7cc",
          400: "#c7c9bb",
          500: "#b9bcaa",
          600: "#abae98",
          700: "#9da187",
          800: "#8f9376",
          900: "#818665",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [],
};
