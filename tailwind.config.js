/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#fde047",
        
"secondary": "#fcc7e6",
        
"accent": "#54bfbd",
        
"neutral": "#382541",
        
"base-100": "#F4F5F5",
        
"info": "#67e8f9",
        
"success": "#31D8AB",
        
"warning": "#fdba74",
        
"error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"],
  },
}

