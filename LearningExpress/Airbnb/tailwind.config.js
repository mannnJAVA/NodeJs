/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./views/*.ejs",
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // core card and control utilities we use in templates
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
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
