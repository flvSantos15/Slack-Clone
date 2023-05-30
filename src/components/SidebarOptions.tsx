'use client'

import { v4 as uuidv4 } from 'uuid'
import { doc, setDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { IconType } from 'react-icons'

import { enterChat } from '@/features/AppSlice'
import { db } from '@/services/firebase'

interface SidebarOptionsProps {
  Icon?: IconType
  title: string
  addChannelOption?: boolean
  id?: string
}

export function SidebarOptions({
  Icon,
  title,
  addChannelOption,
  id
}: SidebarOptionsProps) {
  const dispatch = useDispatch()

  const handleAddChannel = async () => {
    const channelName = prompt('Please enter the channel name')

    if (channelName) {
      const channelDoc = {
        name: channelName
      }

      const channelCollection = doc(db, 'chats', uuidv4())
      const messageCollection = doc(db, 'chatsMessages', uuidv4())

      await setDoc(channelCollection, channelDoc)
      await setDoc(messageCollection, { messages: [] })

      alert('Channel created successifully!!!')
    }
  }

  const handleSelectChannel = async () => {
    if (id) {
      dispatch(
        enterChat({
          chatId: id
        })
      )
    }
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
        <h3 className="py-[10px] px-0 font-light">
          <span className="p-2">#</span>
          {title}
        </h3>
      )}
    </div>
  )
}
