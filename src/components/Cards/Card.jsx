import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"
import { darkModeBorder, lightModeBorder } from "../../utils/Styles"

export default function Card({ title, description }) {
  const { theme } = useContext(ThemeContext)

  return (
    <article className={`min-w-36 max-w-[620px] h-80 border-2 rounded-se-[20px] rounded-es-[10px] flex flex-col flex-grow px-4 items-center justify-between shadow-md`}>
        <p className="text-2xl font-semibold tracking-wide underline">{ title }</p>
        <p className="text-sm font-light">{ description }</p>
    </article>
  )
}
