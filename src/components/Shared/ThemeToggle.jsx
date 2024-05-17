import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"
import { darkModeBorder, lightModeBorder } from "../../utils/Styles"

export default function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext)
    
    const handleToggle = () => {
        setTheme(prevTheme => !prevTheme)
        console.log(theme)
    }
  return (
    <div className={`w-10 h-4 border-2 rounded-full p-2 relative shadow-sm z-0  ${theme ? lightModeBorder : darkModeBorder }`}>
        <div className={`w-4 h-4 rounded-full absolute top-0 z-10 ${theme ? "translate-x-[13px] bg-black" : "-translate-x-2 bg-primary2"} transition-all duration-500 ease-in-out`} onClick={handleToggle}></div>
    </div>
  )
}