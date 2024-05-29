import { Close } from '@mui/icons-material'
import { useContext } from 'react'
import { SidebarContext } from '../../utils/SidebarContext'
import CustomButton from './CustomButton'
import { Link, useLocation } from 'react-router-dom'
import { sidebar } from '../../utils/sidebar'
import { Settings } from '@mui/icons-material'
import { Dashboard } from '@mui/icons-material'
import { Task } from '@mui/icons-material'
import { CalendarIcon } from '@mui/x-date-pickers'
import { ClockIcon } from '@mui/x-date-pickers'
import { Event } from '@mui/icons-material'
import { EventAvailable } from '@mui/icons-material'
import { Notes } from '@mui/icons-material'
import { Book } from '@mui/icons-material'

export default function Sidebar() {
  const { pathname } = useLocation() //getting the path name of the current page

  return (
    <main
      className={`hidden w-[80px] lg:w-[350px] md:flex flex-col gap-5 transition duration-300 ease-in-out bg-[var(--global-card-bg)] border-r-[var(--global-primary-skeleton)]`}
    >
      <div className="flex flex-col items-center">
        <section className="min-h-[600px] w-full flex flex-col items-center justify-center gap-y-6">
          <Link to={"/tasks"}>
            <button className="relative w-12 lg:w-60 h-12 rounded-md lg:border-2 border-[var(--global-border)] text-[var(--global-text)] p-2 flex items-center justify-center">
              <Task className="lg:absolute left-2" />
              <p className='hidden lg:flex'>Tasks</p>
            </button>
          </Link>
          <Link to={"/calendar"} className="">
            <button className="relative w-12 lg:w-60 h-12 rounded-md lg:border-2 border-[var(--global-border)] text-[var(--global-text)] p-2 flex items-center justify-center">
              <CalendarIcon className="lg:absolute left-2" />
              <p className="hidden lg:flex">Calendar</p>
            </button>
          </Link>
          <Link to={"/pomodoro"} className="">
            <button className="relative w-12 lg:w-60 h-12 rounded-md lg:border-2 border-[var(--global-border)] text-[var(--global-text)] p-2 flex items-center justify-center">
              <ClockIcon className="lg:absolute left-2" />
              <p className="hidden lg:flex">Pomodoro</p>
            </button>
          </Link>
          <Link to={"/notes"} className="">
            <button className="relative w-12 lg:w-60 h-12 rounded-md lg:border-2 border-[var(--global-border)] text-[var(--global-text)] p-2 flex items-center justify-center">
              <Book className="lg:absolute left-2" />
              <p className="hidden lg:flex">Notes</p>
            </button>
          </Link>
        </section>
        <Link to={"/account-settings"} className=" -bottom-60">
          <button className="relative w-12 lg:w-60 h-12 rounded-md lg:border-2 border-[var(--global-border)] text-[var(--global-text)] p-2 flex items-center justify-center">
            <Settings className="lg:absolute left-2" />
            <p className="hidden lg:flex">Account Settings</p>
          </button>
        </Link>
      </div>
    </main>
  );
}
