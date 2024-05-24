import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { TaskContext } from "../TaskContext";

export default function useFetchData(){
  const { setTasks } = useContext(TaskContext)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const fetchTasks = useCallback(async() => {
      try {
        const options = {
          headers: {
            accept: "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };
        const res = await axios.get("http://localhost:3000/get-tasks", options);
        if (res.status !== 200) {
          throw new Error();
        }
        setTasks(res.data);
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }, [setTasks])

  useEffect(()=> {
    fetchTasks()
  }, [fetchTasks])
  
  const refetch = async() => {
    await fetchTasks();
  } 
  
  return { isLoading, refetch, error }
}