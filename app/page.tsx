import Image from 'next/image'
import Sidebar from './components/Sidebar'
import MyHome from './home/page'
import AdminPage from './adm/page'

export default function Home() {
  return (
    <main className="w-screen  ">
    
      <MyHome />
      
    </main>
  )
}
