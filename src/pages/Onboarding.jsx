import { useContext } from "react";
import Card from "../components/Cards/Card";
import ThemeToggle from "../components/Shared/ThemeToggle";
import Button from "../components/Shared/button";
import { ThemeContext } from "../components/ThemeContext";
import { darkMode, lightMode } from "../utils/Styles"
import { noteTaking, planning, pomodoro } from "../utils/Descriptions";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
export default function Onboarding() {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()
  return (
    <main className={`h-full flex flex-col items-center justify-center gap-y-8 relative ${theme ? lightMode : darkMode }`}>
      <section className="absolute top-4 right-4">
        <ThemeToggle/>
      </section>
      
      <div className="flex flex-col items-center justify-center gap-y-2 mt-48">
      <h3 className="text-2xl">Welcome to <span className="text-2xl font-bold tracking-wide text-primary2">Sakura</span></h3>
      <p className="font-semibold sm:text-[15px] text-xs">A professional task manager for your personal student needs</p>
      </div>
      <div onClick={()=>navigate('/sign-up')}>
      <Button title="Join Now" />
      </div>

      <section className="flex flex-col items-center justify-center gap-8 w-full h-max mt-16 px-80">
        <Card title='Effective Planning' description={planning} className='self-start'/>
        <Card title='Note Taking' description={noteTaking} className='self-end'/>
        <Card title='Pomodoro' description={pomodoro} />
      </section>
      <Footer/>
    </main>
  )
}
