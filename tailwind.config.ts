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
        hoverButton: "#5864ff",
        textHover:"#f7f7fc",
        buttonBorder:"#5864ff",
        navbar:"#fff",
        titleTable:"#5864ff"
      },
       
      
    },
  },
  plugins: [],
}
export default config
