'use client'

import { db } from '@/services/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { IconType } from 'react-icons'

interface SidebarOptionsProps {
  Icon?: IconType
  title: string
  addChannelOption?: boolean
}

// parei 1:32:18
// precisando rever a configuração do firebase

export function SidebarOptions({
  Icon,
  title,
  addChannelOption
}: SidebarOptionsProps) {
  const handleAddChannel = async () => {
    const channelName = prompt('Please enter the channel name')

    if (channelName) {
      const channelDoc = {
        displayName: channelName
      }

      const roomDocCollectionReference = doc(db, 'chats')

      await setDoc(roomDocCollectionReference, channelDoc)
    }
  }

  const handleSelectChannel = () => {}

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
