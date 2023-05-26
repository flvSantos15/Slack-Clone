import { IconType } from 'react-icons'

interface SidebarOptionsProps {
  Icon?: IconType
  title: string
}

// parei em 1:14:17

export function SidebarOptions({ Icon, title }: SidebarOptionsProps) {
  return (
    <div className="flex text-xs items-center pl-[2px]">
      {Icon && <Icon color="#fff" size={24} className="p-[2px]" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <div className="">
          <span>#</span>
          {title}
        </div>
      )}
    </div>
  )
}
