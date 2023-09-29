import "./globals.css"
import Sidebar from "./componets/Sidebar"
import MainBody from "./componets/MainBody"

export default function Home() {
  return (
    <main className="flex">
      <Sidebar/>
      <MainBody />
     
    </main>
  )
}
