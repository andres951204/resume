/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'sell-grid-2': "repeat(auto-fill, minmax(130px, 1fr));",
      },
    },
    colors: {
      white: "#fff",
      pink: {
        transparent: "transparent",
        current: "currentColor",
        light: "#D5A4DF",
        DEFAULT: "#C969DE",
        dark: "#702580",
      },
      status: {
        success: "#2CAE49",
        warning: "#DEE08B",
        danger: "#DD6C6C",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border|fill)-(pink)/,
    },
  ],
};
