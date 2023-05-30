import { MouseEvent, useRef, useState } from 'react'
import {
  doc,
  setDoc,
  serverTimestamp,
  getDoc,
  updateDoc,
  arrayUnion
} from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'

import { db } from '@/services/firebase'

interface ChatInputProps {
  channelName?: string
  channelId: string | null
}

// parei no 2:14:41

export function ChatInput({ channelId, channelName }: ChatInputProps) {
  const inputRef = useRef(null)
  const [message, setMessage] = useState('')

  const handleSendMessage = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!channelId) return false

    const messagesDoc = {
      messages: { message },
      timestamp: serverTimestamp(),
      user: 'Flavio Santos'
    }

    const docRef = doc(db, 'chatsMessages', channelId)

    const response = await getDoc(docRef)

    console.log(response.data())

    if (!response.exists()) {
      await setDoc(docRef, messagesDoc)
    }

    await updateDoc(doc(db, 'chatsMessages', channelId), {
      messages: arrayUnion({
        message
      })
    })

    setMessage('')
  }

  return (
    <div className="rounded-[20px]">
      <form className="relative flex justify-center">
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Message #ROOM`}
          className="fixed bottom-[30px] w-[60%] border border-solid border-[gray] rounded-[3px] p-5 outline-none"
        />
        <button type="submit" onClick={handleSendMessage} className="hidden">
          SEND
        </button>
      </form>
    </div>
  )
}
