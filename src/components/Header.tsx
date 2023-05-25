'use client'

import React from 'react'
import { UserCircle2, Clock4, Search, HelpCircle } from 'lucide-react'

export function Header() {
  const handleSignIn = () => {
    return null
  }

  return (
    <div className="flex fixed w-full items-center justify-between py-[10px] px-0 bg-slack-300">
      <div className="flex-[0.3] flex items-center ml-5">
        <button onClick={handleSignIn} className="pointer hover:opacity-70">
          <UserCircle2 size={36} fontWeight={200} color="#fff" />
        </button>
        <Clock4 color="#fff" className="ml-auto mr-[30px]" />
      </div>

      <div className="flex-[0.4] rounded-md bg-slack-400 text-center flex py-0 px-[50px] text-gray-100 border border-solid border-gray-100">
        <Search />
        <input
          type="text"
          placeholder="Search PPAFAN"
          className="bg-transparent border-0 text-center min-w-[30vw] outline-none text-white"
        />
      </div>

      <div className="flex-[0.3] flex items-end">
        <HelpCircle color="#fff" className="ml-auto mr-5" />
      </div>
    </div>
  )
}
