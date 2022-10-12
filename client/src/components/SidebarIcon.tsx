import { Dispatch, SetStateAction } from 'react'
import { MdOutlineHome } from 'react-icons/md';
type Props = {
  menuOpen: boolean,
  icon: string,
  activeTab: string,
  setActiveTab: Dispatch<SetStateAction<string>>
}

const SidebarIcon = ({ menuOpen, icon, activeTab, setActiveTab }: Props) => {
  return (
    <div
      className={
        ` w-full flex gap-4 items-center 
          ${menuOpen ? 'py-4 pl-2' : 'flex-col gap-1 py-2'} 
          ${activeTab === icon ? 'bg-neutral-700' : ''}
          hover:${activeTab === icon ? 'bg-neutral-600' : 'bg-neutral-700'}
          cursor-pointer
        `}
      onClick={() => {
        activeTab !== icon && setActiveTab(icon)
      }}
    >
      <MdOutlineHome size={menuOpen ? 34 : 26} />
      <p className={`${menuOpen ? 'text-base' : 'text-sm'} text-center capitalize`}>{icon}</p>
    </div>
  )
}

export default SidebarIcon