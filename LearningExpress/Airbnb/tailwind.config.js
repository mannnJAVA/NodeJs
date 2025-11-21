/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./views/*.ejs",
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "bg-white",
    "shadow-sm",
    "rounded-lg",
    "border",
    "bg-gray-100",
    "bg-red-600",
    "hover:bg-red-700",
    "text-white",
    "text-gray-800",
    "bg-slate-800",
    "hover:bg-slate-700",

    // ⭐ ADD THESE FOR YOUR BLUE BUTTON
    "bg-blue-500",
    "hover:bg-blue-600",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
