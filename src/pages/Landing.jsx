import { useContext } from "react";
import Card from "../components/Cards/Card";
import ThemeToggle from "../components/Shared/ThemeToggle";
import Button from "../components/Shared/button";
import { ThemeContext } from "../components/ThemeContext";
import { darkMode, lightMode } from "../utils/Styles"
import { noteTaking, planning, pomodoro } from "../utils/Descriptions";
import Footer from "../components/Footer/Footer";
export default function Landing() {
  const { theme } = useContext(ThemeContext)
  return (
    <main className={`h-screen flex flex-col items-center justify-center gap-y-8 relative ${theme ? lightMode : darkMode }`}>
      <header className="absolute top-4 right-4">
        <ThemeToggle/>
      </header>
      
      <div className="flex flex-col items-center justify-center gap-y-2 mt-[700px]">
      <h3 className="text-2xl">Welcome to <span className="text-2xl font-bold tracking-wide text-primary2">Sakura</span></h3>
      <p className="font-semibold sm:text-[15px] text-xs">A professional task manager for your personal student needs</p>
      </div>
        <Button title="Join Now" />

      <section className="flex md:flex-row flex-col items-center justify-center gap-8 w-full h-max mt-16">
        <Card title='Effective Planning' description={planning}/>
        <Card title='Note Taking' description={noteTaking}/>
        <Card title='Pomodoro' description={pomodoro}/>
      </section>
      <Footer/>
    </main>
  )
}
