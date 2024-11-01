export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffffde",
        secondary: "#f27f3d",
        tertiary: "#f29d52",
        text: "#1D1D26",
        label: "#6b7280",
        labelHighlight: "#F5B47A",
        background: "#0d0d0d",
        backgroundSecondary: "#1D1D26",
        border: "#6b6f7f",
        success: "#A7D3A6",
        successHover: "#CFE795",
        danger: "#CA054D",
        dangerHover: "#FA387F",
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
