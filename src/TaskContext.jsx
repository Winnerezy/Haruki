import { useState } from 'react'
import { createContext } from 'react'

export const TaskContext = createContext() //context for the tasks which is necessary for constant updating 
export default function TaskProvider({ children }) { 
    const [tasks, setTasks] = useState([])
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
        { children }
    </TaskContext.Provider>
  )
}
