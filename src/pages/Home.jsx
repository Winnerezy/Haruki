<<<<<<< HEAD
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext)
  return (
    <main className={`${theme ? "bg-lightgray" : "bg-black"} w-full h-full font-Roboto rounded-tl-[25px]`}>
    </main>
  );
=======

export default function Home() {
  return (
    <div>Home</div>
  )
>>>>>>> 61e6fe2dac5617ea3fd0b7a85cd0d917d6de8f34
}
