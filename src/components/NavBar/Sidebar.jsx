import { Close } from '@mui/icons-material'
import { useContext } from 'react'
import { SidebarContext } from '../../utils/SidebarContext'
import CustomButton from './CustomButton'
import { Link, useLocation } from 'react-router-dom'
import { sidebar } from '../../utils/sidebar'
import { Settings } from '@mui/icons-material'

export default function Sidebar() {
  const { pathname } = useLocation() //getting the path name of the current page

    const { isOpen, setIsOpen } = useContext(SidebarContext)

    const handleClose= () => {
        setIsOpen(false)
    }

    const handleNav = (index) => {
      setActive(index)
    }

  return (
    <main
      className={`h-full w-[300px] absolute z-40 flex flex-col gap-5 transition duration-300 ease-in-out bg-[var(--global-card-bg)] border-r-[var(--global-primary-skeleton)] ${
        !isOpen && "-translate-x-80"
      }`}
    >
      <Close
        className="absolute top-4 left-4 cursor-pointer"
        onClick={handleClose}
      />
      <section className="flex flex-col items-center justify-center mt-36 gap-y-6">
        {sidebar.map((bar, index) => (
          <Link key={index} to={bar.route} onClick={() => handleNav(index)}>
            <CustomButton route={bar.route} pathname={pathname}>
              {bar.name}
            </CustomButton>
          </Link>
        ))}
        <Link to={"/account-settings"} className='relative -bottom-60'>
          <button className="relative w-60 h-12 rounded-md border-2 border-[var(--global-border)] text-[var(--global-text)] p-2 flex items-center justify-center">
            <Settings className='absolute left-2'/>
            <p>Account Settings</p>
          </button>
        </Link>
      </section>
    </main>
  );
}
