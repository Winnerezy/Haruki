import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const EditModalContext = createContext()
export default function EditModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <EditModalContext.Provider value={{ isOpen, setIsOpen }}>
      { children }
    </EditModalContext.Provider>
  )
}
