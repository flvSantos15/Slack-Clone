'use client'

import { HiUserCircle, HiOutlineClock, HiOutlineSearch } from 'react-icons/hi'
import { MdHelpOutline } from 'react-icons/md'

export function Header() {
  const handleSignIn = () => {
    return null
  }

  return (
    <div className="flex fixed w-full items-center justify-between py-[12px] px-0 bg-slack-300">
      <div className="flex-[0.2] flex items-center ml-5">
        <button onClick={handleSignIn} className="pointer hover:opacity-70">
          <HiUserCircle size={36} fontWeight={200} color="#fff" />
        </button>
        <HiOutlineClock size={30} color="#fff" className="ml-auto mr-[30px]" />
      </div>

      <div className="flex-[0.5] rounded-md bg-slack-200 text-center flex items-center py-0 px-[50px] text-gray-100 border border-solid border-gray-100">
        <HiOutlineSearch size={16} />
        <input
          type="text"
          placeholder="Search PPAFAN"
          className="bg-transparent border-0 text-center min-w-[30vw] outline-none text-white"
        />
      </div>

      <div className="flex-[0.3] flex items-end">
        <MdHelpOutline size={20} color="#fff" className="ml-auto mr-5" />
      </div>
    </div>
  )
}
