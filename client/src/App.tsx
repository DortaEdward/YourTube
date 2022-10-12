import { useState, Dispatch, SetStateAction } from 'react'
import './Globals.css'

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';


function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="bg-neutral-900 relative flex-col flex min-h-screen h-screen">
      <Header
        setMenuOpen={setMenuOpen}/>
      <div className='flex h-full'>
        <Sidebar menuOpen={menuOpen} />
        <Main />
      </div>
    </div>
  )
}

export default App
