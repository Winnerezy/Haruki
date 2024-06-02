import React from 'react'

export default function FilterCard({ isOpen }) {
  return (
    <div className={`${isOpen ? "flex" : "hidden"} z-10 w-80 h-48 rounded-md shadow-md absolute top-[170px] bg-[--global-card-bg]`}>
        
    </div>
  )
}
