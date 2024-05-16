import { useEffect } from 'react';
import Button from './button'
import { useState } from 'react';
import ThemeToggle from '../Shared/ThemeToggle';
import useSideBar from './useSideBar';
import { BiSolidRightArrow } from 'react-icons/bi';

export default function SideBar() {
    const [userData, setUserData] = useState(null)
    const [isOpen, setIsOpen, handleSideBar] = useSideBar()

    const token = localStorage.getItem('authToken')
    useEffect(()=> {
        async function fetchUser(){
            try {
            const options = {
                 method: "GET",
                 headers: {
                 "Accept": "application/json",
                 "Content-Type": "application/json",
                 "Authorization": `Bearer ${token}`,
                 }
                }
                const res = await fetch("http://localhost:3000/profile", options);
                if(!res.ok){
                    throw new Error
                }
                const ans = await res.json()
                setUserData(ans)
            } catch (error) {
                console.error("Error", error)
            }
        }
        fetchUser()
    }, [token])
  return (
    <aside className="h-full w-[300px] flex flex-col items-center gap-y-8">
      <section className="font-bold self-center text-3xl mt-12 tracking-wider">
        Haruki
      </section>

      <section className="flex items-center justify-center w-[220px] h-14 rounded-lg border-white border-2 hover:border-text-primary gap-x-2 relative">
        <div className="w-8 h-8 bg-text-primary rounded-full absolute left-2"></div>
        <div className="flex flex-col items-center">
          <article className="font-Roboto text-sm font-light">Winner</article>
          <article className="text-xs font-extralight tracking-wide">
            winner@gmail.com
          </article>
        </div>
      </section>

      <section>
        <article className='flex items-center justify-between w-48'>
          <p>Overview</p>
          <BiSolidRightArrow />
        </article>
      </section>
    </aside>
  );
}
