/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light1': '#EDEDED85',
        'light2': '#fcfcfc',
        'light3': '#EDEDED',

        
        // 'dark1': '#181b2280',
        'dark1': '#181b2285',
        'dark2': '#252934',
        'dark3': '#181b22',
        
        'accent1': '#df204010',
        'accent2': '#df2040',
        'accent3': '#c9102e',

        'success1': '#36b580',
        'failure1': '#ff5630',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
