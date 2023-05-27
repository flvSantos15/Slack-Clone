'use client'

import { db } from '@/services/firebase'
import { doc, setDoc, collection, getDoc, getDocs } from 'firebase/firestore'
import { IconType } from 'react-icons'
import { v4 as uuidv4 } from 'uuid'

interface SidebarOptionsProps {
  Icon?: IconType
  title: string
  addChannelOption?: boolean
}

// parei 1:32:18

export function SidebarOptions({
  Icon,
  title,
  addChannelOption
}: SidebarOptionsProps) {
  const handleAddChannel = async () => {
    const channelName = prompt('Please enter the channel name')

    if (channelName) {
      const channelDoc = {
        name: channelName
      }

      const channelCollection = doc(db, 'chats', uuidv4())

      await setDoc(channelCollection, channelDoc)

      alert('Ok!')
    }
  }

  const handleSelectChannel = async () => {
    // const docRef = doc(db, 'Test', '1')
    const docSnap = await getDocs(collection(db, 'chats'))
    docSnap.forEach((c) => {
      console.log(c.data())
    })
  }

  return (
    <div
      onClick={addChannelOption ? handleAddChannel : handleSelectChannel}
      className="flex text-xs items-center pl-[10px] py-1 cursor-pointer hover:opacity-90 hover:bg-slack-200"
    >
      {Icon && <Icon color="#fff" size={24} className="mr-[6px]" />}
      {Icon ? (
        <h3 className="font-medium">{title}</h3>
      ) : (
        <div className="">
          <span className="p-[15px]">#</span>
          {title}
        </div>
      )}
    </div>
  )
}
