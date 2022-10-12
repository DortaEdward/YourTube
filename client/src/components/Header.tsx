import { useState, Dispatch, SetStateAction } from 'react'
import { MdViewHeadline, MdSearch, MdOutlineVideoCall } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
type Props = {
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}

const iconStyles = 'cursor-pointer hover:scale-110 transition duration-300 ease-in-out'

const Header = ({ setMenuOpen }: Props) => {
  const [search, setSearch] = useState();
  return (
    <div className='w-full bg-neutral-900 py-4 px-10 flex justify-between'>
      <div className='flex items-center gap-4'>
        <MdViewHeadline onClick={() => setMenuOpen((prev) => !prev) } size={38} color='white' className={`${iconStyles} p-1 rounded-full hover:bg-gray-900` } />
        <h1 className={`${iconStyles} text-lg font-bold text-white`}>Your<span className='text-white bg-sky-500 px-[3px] py-[1px] rounded ml-[2px]'>Tube</span></h1>
      </div>
      <div className='flex items-center border border-gray-700'>
        <input type="text" className='text-white h-full w-96 px-3 outline-none bg-neutral-700' placeholder='Search...' />
        <div className=' w-14 flex items-center justify-center h-full hover:bg-neutral-800 cursor-pointer'>
          <MdSearch size={28} className={`${iconStyles}`} color='white' />
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <MdOutlineVideoCall className={`${iconStyles}`} size={32} color='white' />
        <IoMdNotificationsOutline className={`${iconStyles}`} size={32} color='white' />
        <div className='bg-sky-500 text-white w-10 h-10 flex items-center justify-center rounded-full'>

        <h2 className='text-lg leading-normal'>E</h2>
        </div>
      </div>
    </div>
  )
}

export default Header