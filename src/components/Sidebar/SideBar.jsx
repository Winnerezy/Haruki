import { useState } from 'react';
import { useEffect } from 'react';
import { BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi';
import BarView from './BarView';
import { GiBinoculars } from 'react-icons/gi';
import { bars } from './bars';

export default function SideBar() {
    const token = localStorage.getItem('authToken')
    const [userData, setUserData] = useState(null);
    
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
    <aside className="h-full w-[300px] lg:flex flex-col items-center gap-y-8 hidden">
      <section className="font-bold self-center text-3xl mt-12 tracking-wider">
        Haruki
      </section>

      <section className="flex items-center justify-center w-[220px] h-14 rounded-lg border-white border-2 hover:border-text-primary gap-x-2 relative">
        <div className="w-8 h-8 bg-text-primary rounded-full absolute left-2"></div>
        <div className="flex flex-col items-center">
          <article className="font-Roboto text-sm font-light">{ userData?.firstname }</article>
          <article className="text-xs font-extralight tracking-wide">
            { userData?.email }
          </article>
        </div>
      </section>

      <section>
       { bars.map((bar, index)=> <BarView title={bar.title} items={bar.items} key={index}/>) }
      </section>
    </aside>
  );
}
