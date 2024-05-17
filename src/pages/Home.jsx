import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import Todobar from "../components/Home/todobar";
import { GrAddCircle } from "react-icons/gr";
import { Box,  Modal, TextField } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";

export default function Home() {
    const [open, setOpen] = useState(false);
    const handleNewTask = () => setOpen(true);
    const handleClose = () => setOpen(false)
  const { theme } = useContext(ThemeContext)

    const [title, setTitle] = useState("");
    const titleRef = useRef(null);
    const [description, setDescription] = useState("");
    const descriptionRef = useRef(null);

  const handleTitle = () => {
    setTitle(titleRef.current.value)
  }


  const handleDescription = () => {
    setDescription(descriptionRef.current.value);
  };

  const handleAdd = async() => {
    try {
      const options  = {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("authToken")}`
        },
        body: JSON.stringify({
          title: title,
          description: description
        })
      }
      const res = await fetch("http://localhost:3000/add-task", options)
      if(!res.ok){
        throw new Error("Error found")
      }
      const ans = await res.json()
      setOpen(false);
      console.log(ans)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main
      className={`bg-lightgray flex flex-col items-center rounded-tl-[25px] h-full px-8 w-full`}
    >
      <section className="flex flex-col items-start mt-12 w-full space-y-4">
        <button
          className="flex flex-row items-center justify-center gap-x-2 self-end w-8 h-8 font-semibold text-center rounded-[10px] bg-azure-radiance-300"
          onClick={handleNewTask}
        >
          <GrAddCircle />
        </button>
        <div className="w-full flex items-center justify-center sm:flex-row lg:gap-x-48 md:gap-x-16 sm:gap-x-8 flex-col gap-y-48 ">
          <Todobar title="Not Started" />
          <Todobar title="In Progress" />
          <Todobar title="Completed" />
        </div>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        className="flex items-center justify-center"
      >
        <Box className="max-w-[1000px] min-w-[300px] flex sm:flex-row flex-col items-center justify-center flex-grow h-[500px] bg-white rounded-md mx-16 px-4 relative">
          <section className="w-1/2 h-full">

          </section>
          <div className="w-1/2 h-full flex flex-col sm:mt-36 gap-y-4">
            <input
              type="text"
              className="flex-grow min-w-4 max-h-10 border-2 rounded-md outline-none"
              placeholder="Enter your title for your task"
              value={title}
              onChange={handleTitle}
              ref={titleRef}
            />
            <TextField
              className="flex-grow min-w-4 max-h-24 outline-none"
              placeholder="Enter description for the task"
              value={description}
              onChange={handleDescription}
              ref={descriptionRef}
            />
            
          </div>
          <button className="w-24 rounded-md absolute bottom-4 bg-azure-radiance-300 hover:bg-azure-radiance-400 p-2 text-white shadow-md" onClick={handleAdd}>
            Add
          </button>
        </Box>
      </Modal>
    </main>
  );
}
