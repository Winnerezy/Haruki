import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const SidebarContext = createContext()
export default function SidebarProvider({ children }) {
    const [isOpen, setIsOpen] = useState(()=> {
       const savedState =  localStorage.getItem("isOpen") // getting the saved open state
       return savedState !== null ? JSON.parse(savedState) : true
    })

    useEffect(()=> {
        localStorage.setItem("isOpen", JSON.stringify(isOpen)) // saving the state of the side bar 
    }, [isOpen])

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
        { children }
    </SidebarContext.Provider>
  )
}
