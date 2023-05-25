import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Header />

      <div className="">
        <Sidebar />
      </div>
    </div>
  )
}
