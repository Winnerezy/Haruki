import { MenuSharp } from '@mui/icons-material'
import { Settings } from '@mui/icons-material'
import { useContext } from 'react'
import { SidebarContext } from '../../utils/SidebarContext'

export default function Topbar() {

  const { setIsOpen } = useContext(SidebarContext)

  const handleOpen = () => {
    setIsOpen(true)
  }
  return (
    <header className='topbar w-full h-16 flex flex-row items-center'>
        <p className='font-bold text-2xl tracking-wide self-start text-center pt-4 pl-4'>Haruki</p>
        
        <div className='flex items-center justify-center gap-x-4 absolute right-4 cursor-pointer'>
          <MenuSharp onClick={handleOpen}/>
          <Settings/>
          <section className='w-8 h-8 rounded-full profile'>

          </section>
        </div>
    </header>
  )
}
