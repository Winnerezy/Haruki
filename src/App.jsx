import React from 'react'
import TopBar from './components/Header/TopBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div>
        <header>
        <TopBar/>
        </header>
    
    <Outlet/>
    <footer>
        <Footer/>
    </footer>
    </div>


  )
}
