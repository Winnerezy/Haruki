import { IoIosMenu } from "react-icons/io";
import useSideBar from "../Sidebar/useSideBar";
import { useState } from "react";
import moment from "moment";

export default function TopBar() {
const [clock, setClock] = useState({ date: null, time: null });

const dateAndTime = () => {
  const today = new Date()
  const time = today.toLocaleString({}, {timeStyle: "medium"})
  const date = moment().format("ll");
  setClock({time: time, date: date})
}


setInterval(dateAndTime, 1000);


  return (
    <header className="bg-white flex flex-grow w-full h-[136px] relative">
      <section className="flex flex-col w-[200px] absolute right-2 bottom-0 gap-y-2 justify-center items-end">
        <div className="sm:text-2xl text-xl font-bold tracking-tight self-end">{clock.time}</div>
        <div className="font-bold sm:text-3xl text-xl">{clock.date}</div>
      </section>
    </header>
  );
}
