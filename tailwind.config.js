 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
      
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
        },
        screens: {
          default: "1140px",
        },
      },
    },
    plugins: [],
  }