/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"
],
  
  theme: {
    extend: {
      colors: {
        background: '#F6F5FA',
        headingColor: '#1e505d',
        header: '#64fcda',
        active: '#253852',
        highlight: '#E1A86A'


      },
      fontFamily: {
        'sans': ['Poppins Regular', 'Helvetica', 'Arial', 'sans-serif'],
        'sans-bold': ['Poppins Bold', 'Helvetica', 'Arial', 'sans-serif'],
        'sans-semibold': ['Poppins SemiBold', 'Helvetica', 'Arial', 'sans-serif'],
        'sans-italic': ['Poppins Italic', 'Helvetica', 'Arial', 'sans-serif'],
        'Inter': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'Inter-Bold': ['Inter Bold', 'Helvetica', 'Arial', 'sans-serif'],
        'Inter-SemiBold': ['Inter SemiBold', 'Helvetica', 'Arial', 'sans-serif'],
        'SFMONO': ['SFMONO', 'Helvetica', 'Arial', 'sans-serif'],
        'SFMONOBOLD': ['SF MONO BOLD', 'Helvetica', 'Arial', 'sans-serif'],
        'SFMONOSEMIBOLD': ['SF MONO SEMI BOLD', 'Helvetica', 'Arial', 'sans-serif'],



      },    
    },
  },
  plugins: [],
}