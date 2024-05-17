import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import TopBar from './components/Topbar/TopBar';
import SideBar from './components/Sidebar/SideBar';

export default function App() {
  return (
    <main className="flex h-[1000px] w-full">
      <SideBar />
      <div className="h-full w-full flex flex-col">
        <TopBar />
        <Outlet />
      </div>
    </main>
  );
}
