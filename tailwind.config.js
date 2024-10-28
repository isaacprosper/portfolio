// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

    theme: {
      screens: {
        ssm: '375px', // Small Small Mobile
        sm: '640px',  // Small Mobile
        md: '768px',  // Medium
        lg: '1024px', // Large
        xl: '1280px', // Extra Large
      },
      extend: {},
    },
    variants: {},
    plugins: [],
  };
