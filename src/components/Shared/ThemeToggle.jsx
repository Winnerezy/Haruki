import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"
<<<<<<< HEAD
import { FaRegMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
=======
import { darkModeBorder, lightModeBorder } from "../../utils/Styles"
>>>>>>> 61e6fe2dac5617ea3fd0b7a85cd0d917d6de8f34

export default function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext)
    
    const handleToggle = () => {
        setTheme(prevTheme => !prevTheme)
        console.log(theme)
    }
  return (
<<<<<<< HEAD
    <div className="self-center">
      <div
        className={`w-36 h-10 border-2 border-black rounded-full py-2 relative flex items-center justify-between shadow-sm z-0`}
      >
        <FaSun size="30" className="ml-2" />
        <div
          className={`w-20 h-[38px] rounded-full absolute top-0 z-30 ${
            theme ? "translate-x-[62px] bg-black" : "translate-x-0 bg-black"
          } transition-all duration-500 ease-in-out`}
          onClick={handleToggle}
        ></div>
        <FaRegMoon size="30" className="mr-2" />
      </div>
    </div>
  );
=======
    <div className={`w-10 h-4 border-2 rounded-full p-2 relative shadow-sm z-0  ${theme ? lightModeBorder : darkModeBorder }`}>
        <div className={`w-4 h-4 rounded-full absolute top-0 z-10 ${theme ? "translate-x-[13px] bg-black" : "-translate-x-2 bg-primary2"} transition-all duration-500 ease-in-out`} onClick={handleToggle}></div>
    </div>
  )
>>>>>>> 61e6fe2dac5617ea3fd0b7a85cd0d917d6de8f34
}