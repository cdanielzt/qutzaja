/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "!./node_modules/**/*"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"REM"', 'sans-serif'],
      },
      colors: {
        border: "rgb(214 220 231)",
        ring: "rgb(154 168 191)",
        background: "#EEEEEE",
        foreground: "#EEEEEE",
        primary: {
          DEFAULT: "rgb(191, 49, 49)",
          foreground: "rgb(250 250 250)",
        },
        secondary: {
          DEFAULT: "rgb(238, 238, 238)",
          foreground: "rgb(52 52 52)",
        },
        accent: {
          DEFAULT: "rgb(191, 49, 49)",
          foreground: "rgb(28 38 57)",
        },
        muted: {
          DEFAULT: "rgb(240 244 248)",
          foreground: "rgb(100 116 139)",
        },
        card: {
          DEFAULT: "#09122C",
          foreground: "#EEEEEE",
        },
        destructive: {
          DEFAULT: "rgb(239 68 68)",
          foreground: "rgb(248 250 252)",
        },
      },
    },
  },
  plugins: [],
}

