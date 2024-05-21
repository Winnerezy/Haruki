import { Close } from '@mui/icons-material'
import { useContext } from 'react'
import { SidebarContext } from '../../utils/SidebarContext'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const { isOpen, setIsOpen } = useContext(SidebarContext)

    const handleClose= () => {
        setIsOpen(false)
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
        <Link to={"/dashboard"}>
          <CustomButton variant="contained">Dashboard</CustomButton>
        </Link>
        <Link to={"/calendar"}>
          <CustomButton variant="contained">Calendar</CustomButton>
        </Link>
        <Link to={"/my-events"}>
          <CustomButton variant="contained">My Events</CustomButton>
        </Link>
        <Link to={'/pomodoro'}>
          <CustomButton variant="contained">Pomodoro</CustomButton>
        </Link>
      </section>
    </main>
  );
}
