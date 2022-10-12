import { useState } from 'react';
import SidebarIcon from './SidebarIcon';
type Props = {
  menuOpen: boolean
}

const Sidebar = ({ menuOpen }: Props) => {
  const [activeTab, setActiveTab] = useState('home')
  return (
    <div className={`text-white flex  flex-col py-4 bg-neutral-900 ${menuOpen ? 'w-52 items-start' : 'w-24 items-center'}`}>
      <SidebarIcon menuOpen={menuOpen} icon={'home'} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <SidebarIcon menuOpen={menuOpen} icon={'explore'} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <SidebarIcon menuOpen={menuOpen} icon={'subscribe'} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <SidebarIcon menuOpen={menuOpen} icon={'library'} activeTab={activeTab} setActiveTab={setActiveTab}/>
    </div>
  )
}

export default Sidebar