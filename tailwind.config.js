/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 98%)",
        foreground: "hsl(0, 0%, 10%)",
        card: "hsl(0, 0%, 100%)",
        cardForeground: "hsl(0, 0%, 10%)",
        primary: "hsl(10, 90%, 58%)",
        primaryForeground: "hsl(0,0%,100%)",
        secondary: "hsl(0,0%,96%)",
        secondaryForeground: "hsl(0,0%,10%)",
        muted: "hsl(0,0%,96%)",
        mutedForeground: "hsl(0,0%,45%)",
        accent: "hsl(330,85%,60%)",
        destructive: "hsl(0,84%,60%)",
        border: "hsl(0,0%,90%)",
        input: "hsl(0,0%,95%)",
        "shadow-soft": "0 2px 20px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        lg: "1rem",
        full: "999px",
      },
    },
  },
  plugins: [],
};
