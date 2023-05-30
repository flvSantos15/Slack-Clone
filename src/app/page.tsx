import { Chat } from '@/components/Chat'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Header />

      <div className="flex h-screen w-full">
        <Sidebar />
        <div className="flex-1 h-screen w-full">
          <Chat />
        </div>
      </div>
    </div>
  )
}
