import { Box, Modal } from "@mui/material";
import Button from "../Shared/Button";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";

export default function NewTaskModal({ open, handleClose, setOpen }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState("");
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)

    const handleChange = () => {
        setTitle(titleRef.current.value);
        setDescription(descriptionRef.current.value)
    }

    const handleAdd = async() => {
        try {
            const options = {
              headers: {
                "accept": "application/json",
                "authorization": `Bearer ${localStorage.getItem("authToken")}`,
              },
            };
            const body = {
                title: title,
                description: description
            };
           const res =  await axios.post("http://localhost:3000/add-task", body, options)
           if(res.status !== 200){
            throw new Error
           }
           handleClose()
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex w-full items-center justify-center"
    >
      <Box className="max-w-[1000px] h-[600px] task flex-grow mx-4 rounded-md w-full p-4 flex items-center justify-center">
        <section className="size-full">

        </section>
        <section className="w-full flex flex-col gap-16">
          <input
            type="text"
            placeholder="Enter task title"
            className="max-w-[400px] w-full max-h-14 flex-grow outline-none border-b-2 bg-transparent font-bold"
            value={title}
            ref={titleRef}
            onChange={handleChange}
          />
          <textarea
            type="text"
            placeholder="Enter description"
            className="max-w-[400px] w-full max-h-24 flex-grow outline-none bg-transparent font-light"
            value={description}
            ref={descriptionRef}
            onChange={handleChange}
          />
          <Button title={"Add Task"} onClick={handleAdd}/>
        </section>
      </Box>
    </Modal>
  );
}
