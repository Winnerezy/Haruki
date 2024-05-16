
export default function Button({ children }) {
  return (
    <button className={`relative flex items-center justify-center flex-row px-2  flex-grow min-w-24 h-8 rounded-lg border-dustyrose text-sm text-center font-semibold shadow-md hover:bg-rose-100`}>
      { children }
    </button>
  )
}
