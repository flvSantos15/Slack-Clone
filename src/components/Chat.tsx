'use client'

import { HiOutlineStar } from 'react-icons/hi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useCollection } from 'react-firebase-hooks/firestore'

import { selecteChatId } from '@/features/AppSlice'

import { ChatInput } from './ChatInput'
import { collection, doc, getFirestore } from 'firebase/firestore'
import { db, firebaseApp } from '@/services/firebase'

export function Chat() {
  const chatId = useSelector(selecteChatId) as string
  const [chatDetails] = useCollection(
    collection(getFirestore(firebaseApp), 'chatsMessages')
  )
  // parei no 2:25:32

  chatDetails?.forEach(async (i) => {
    const { messages, user } = await i.data()
  })

  return (
    <div className="flex-[0.7] flex-grow overflow-y-auto mt-[60px]">
      <div className="flex justify-between p-5 border-b border-b-solid border-b-[#ccc]">
        <div className="flex items-center">
          <h4 className="flex lowercase">
            <strong>#Room-name</strong>
          </h4>
          <HiOutlineStar className="ml-[10px] text-lg" />
        </div>

        <div className="">
          <p className="flex items-center text-sm">
            <AiOutlineInfoCircle className="mr-[5px] text-base" /> Details
          </p>
        </div>
      </div>

      <div className="">{/* list messages */}</div>

      {/* chat input */}
      <ChatInput
        // channelName
        channelId={chatId}
      />
    </div>
  )
}
