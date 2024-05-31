import { Close } from "@mui/icons-material";
import { useContext } from "react";
import { SidebarContext } from "../../utils/SidebarContext";
import CustomButton from "./CustomButton";
import { Link, useLocation } from "react-router-dom";
import { sidebar } from "../../utils/sidebar";
import { Settings } from "@mui/icons-material";
import { Dashboard } from "@mui/icons-material";
import { Task } from "@mui/icons-material";
import { CalendarIcon } from "@mui/x-date-pickers";
import { ClockIcon } from "@mui/x-date-pickers";
import { Event } from "@mui/icons-material";
import { EventAvailable } from "@mui/icons-material";
import { Notes } from "@mui/icons-material";
import { Book } from "@mui/icons-material";

export default function BottomBar() {
  const { pathname } = useLocation(); //getting the path name of the current page

  return (
    <main
      className={`fixed z-50 bottom-0 md:hidden w-full flex gap-5 transition duration-300 ease-in-out bg-[var(--global-card-bg)] border-r-[var(--global-primary-skeleton)]`}
    >
      <section className="h-20 w-full flex items-center justify-between px-2 sm:px-8 md:px-12">
        <Link to={"/tasks"}>
          <button className="relative w-12 h-12 rounded-md lg:border-2 border-[var(--global-border)] text-[var(--global-text)] p-2 flex flex-col items-center justify-center">
            <Task />
            <p className="flex">Tasks</p>
          </button>
        </Link>
        <Link to={"/calendar"} className="">
          <button className="relative w-12 h-12 rounded-md lg:border-2 border-[var(--global-border)] text-[var(--global-text)] p-2 flex flex-col items-center justify-center">
            <CalendarIcon />
            <p className="flex">Calendar</p>
          </button>
        </Link>
        <Link to={"/pomodoro"} className="">
          <button className="relative w-12 h-12 rounded-md lg:border-2 border-[var(--global-border)] text-[var(--global-text)] p-2 flex flex-col items-center justify-center">
            <ClockIcon />
            <p className="flex">Pomodoro</p>
          </button>
        </Link>
        <Link to={"/notes"} className="">
          <button className="relative w-12 h-12 rounded-md lg:border-2 border-[var(--global-border)] text-[var(--global-text)] p-2 flex flex-col items-center justify-center">
            <Book />
            <p className="flex">Notes</p>
          </button>
        </Link>
        <Link to={"/account-settings"}>
          <button className="relative w-12 h-12 rounded-md lg:border-2 border-[var(--global-border)] text-[var(--global-text)] p-2 flex flex-col items-center justify-center">
            <Settings />
            <p className="flex">Account</p>
          </button>
        </Link>
      </section>
    </main>
  );
}
