/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      boxShadow: {
        "custom-light": "0px 4px 10px 0px rgba(0, 0, 0, 0.08)",
        "custom-green": "0px 4px 6px 0px #98FF9833",
        "custom-light-1": "0px 4px 6px 0px #98FF9833",
      },
      backgroundImage: {
        "signup-gradient":
          "linear-gradient(129.93deg, #228B22 0%, #98FF98 100%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
