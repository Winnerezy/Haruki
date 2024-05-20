import { Settings } from '@mui/icons-material'
import React from 'react'

export default function Topbar() {
  return (
    <header className='topbar w-full h-16 flex flex-row items-center'>
        <p className='font-bold text-2xl tracking-wide self-start text-center pt-4 pl-4'>Haruki</p>
        
        <div className='flex items-center justify-center gap-x-4 absolute right-4'>
          <Settings/>
          <section className='w-8 h-8 rounded-full profile'>

          </section>
        </div>
    </header>
  )
}
