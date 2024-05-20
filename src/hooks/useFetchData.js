import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

export default function useFetchData(){
  const [tasks, setTasks] = useState([])

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
        console.log(tasks);
      } catch (error) {
        console.error(error);
      }
    }, [tasks])

  useEffect(()=> {
    fetchTasks()

    return ()=> console.log("Cleaned Up")
  }, [tasks])

  return { tasks }
}