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
        sidebarbgColor: "#5864ff",
        contentbgColor: "#5864ff",
        hoverButton: "#2471A3",
        bgColor:"#1F618D",
        textHover:"#f7f7fc",
        buttonBorder:"#2471A3",
        navbar:"#fff",
        titleTable:"#5864ff",
        itemBg:"#2471A3"
      },
       
      
    },
  },
  plugins: [],
}
export default config
