'use client'

import {
  MdCreate,
  MdFiberManualRecord,
  MdChat,
  MdInbox,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp
} from 'react-icons/md'
import { IoMdMailOpen } from 'react-icons/io'
import { HiUsers, HiBookmark, HiPlusSm } from 'react-icons/hi'
import { CgMenuGridR } from 'react-icons/cg'
import { ImFilesEmpty } from 'react-icons/im'

import { SidebarOptions } from './SidebarOptions'

export function Sidebar() {
  return (
    <div className="flex-[0.3] border-t border-t-solid border-slack-100 max-w-[280px] mt-[60px] bg-slack-300 text-white">
      <div className="flex w-full justify-between border-b border-b-solid border-b-slack-100 p-[13px]">
        <div className="flex-1">
          <h2 className="text-base font-black mb-[5px]">PAPA FAM HQ</h2>

          <h3 className="flex text-xs font-normal items-center">
            <MdFiberManualRecord
              color="green"
              size={14}
              className="mt-[1px] mr-1/2"
            />
            Flavio Santos
          </h3>
        </div>

        <MdCreate
          color="#49274b"
          size={30}
          className="p-1.5 bg-white rounded-full"
        />
      </div>

      <SidebarOptions Icon={MdChat} title="Threads" />
      <SidebarOptions Icon={MdInbox} title="Mentions & reactions" />
      <SidebarOptions Icon={HiBookmark} title="Saved items" />
      <SidebarOptions Icon={IoMdMailOpen} title="Channel browser" />
      <SidebarOptions Icon={HiUsers} title="People & user groups" />
      <SidebarOptions Icon={CgMenuGridR} title="Apps" />
      <SidebarOptions Icon={ImFilesEmpty} title="File browser" />
      <SidebarOptions Icon={MdKeyboardArrowUp} title="Show less" />

      <hr className="my-[10px] border border-solid border-slack-100" />

      <SidebarOptions Icon={MdKeyboardArrowDown} title="Channels" />

      <hr className="my-[10px] border border-solid border-slack-100" />

      <SidebarOptions Icon={HiPlusSm} addChannelOption title="Add Channel" />
      <SidebarOptions title="Youtube" />
      <SidebarOptions title="PAPA" />
      <SidebarOptions title="PapaFan Legends" />
    </div>
  )
}
