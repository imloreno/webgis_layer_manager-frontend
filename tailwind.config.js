export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffffde",
        secondary: "#f29d52",
        background: "#0d0d0d",
        backgroundSecondary: "#1D1D26",
        border: "#6b6f7f",
      },

      font: {
        family: {
          primary: "Poppins, sans-serif",
          secondary: "Roboto, sans-serif",
        },
      },
      fontSize: {
        base: "16px",
        h1: "2.25rem",
        h2: "1.75rem",
        h3: "1.5rem",
        h4: "1.25rem",
        h5: "1.125rem",
        h6: "1rem",
        p: "10rem",
        small: "0.875rem",
        medium: "25rem",
      },
    },
  },
  plugins: [],
};
