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
        sidebarbgColor: "#081E33",
        contentbgColor: "#F7F7FC",
        hoverButton: "#081e33",
        textHover:"#f7f7fc",
        buttonBorder:"#081e33"
      },
       
      
    },
  },
  plugins: [],
}
export default config
