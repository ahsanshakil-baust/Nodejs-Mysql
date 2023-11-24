import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  // Other Tailwind CSS configurations...
  prefix: "tw-", // Prefix all Tailwind classes
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      // Add other file paths as needed
    ],
    options: {
      safelist: [
        "MuiButton",
        "MuiTypography" /* Add more Material-UI classes as needed */,
      ],
    },
  },
};

export default config;
