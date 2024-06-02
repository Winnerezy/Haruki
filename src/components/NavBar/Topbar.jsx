import { MenuSharp } from '@mui/icons-material'
import { Settings } from '@mui/icons-material'
import { useContext } from 'react'
import { SidebarContext } from '../../utils/SidebarContext'

export default function Topbar() {

  return (
    <header className="topbar w-full h-[100px] flex flex-row items-center bg-[var(--global-card-bg)]">
      <div className="flex items-center justify-center gap-x-4 absolute right-4 cursor-pointer">
        <section className="w-8 h-8 rounded-full profile"></section>
      </div>
    </header>
  );
}
