import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors:{
        pagebgColor: "#E3E3EF",
        sidebarbgColor: "#1F618D",
        contentbgColor: "#5DADE2",
        hoverButton: "#3498DB",
        textHover:"#f7f7fc",
        buttonBorder:"#3498DB"
      },
       
      
    },
  },
  plugins: [],
}
export default config
