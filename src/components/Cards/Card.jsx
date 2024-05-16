import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"
import { darkModeBorder, lightModeBorder } from "../../utils/Styles"

export default function Card({ title, description }) {
  const { theme } = useContext(ThemeContext)

  return (
    <article className={`w-80 h-80 border-2 rounded-se-[20px] rounded-es-[15px] grid grid-cols-1 px-4 items-center justify-between shadow-md ${theme ? lightModeBorder : darkModeBorder}`}>
        <p className="text-2xl font-semibold tracking-wide underline">{ title }</p>
        <p className="text-sm font-light">{ description }</p>
    </article>
  )
}
