import { Box, Modal } from "@mui/material";
import Button from "../Shared/Button";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import useFetchData from "../../hooks/useFetchData";
import ReactSelect from "react-select";
import { useEffect } from "react";

export default function EditTaskModal({ id, isOpen, handleClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [date, setDate] = useState(dayjs(new Date())); //date picker for the modal
  const [type, setType] = useState("");
  const { refetch } = useFetchData();

  const handleChange = () => {
    setTitle(titleRef.current.value);
    setDescription(descriptionRef.current.value);
  };

  const taskTypes = [ 
    { value: "personal", label: "Personal" },
    { value: "school", label: "School" },
    { value: "work", label: "Work" },
  ];

  useEffect(() => {
    async function fetchTask(){
    try {
      const options = {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      const res = await axios.get(
        `http://localhost:3000/get-task/${id}`,
        options
      );
      if (res.status !== 200) {
        throw new Error();
      }
      const { title, description, dueDate, type } = res.data
      setTitle(title);
      setDescription(description)
      setType(type)
      setDate(dayjs(dueDate))
    } catch (error) {
      console.error(error);
    }
  }
  fetchTask()
}, [id]);
console.log(type)
const handleEdit = async() => {
    try {
      const options = {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      const body = {
        title: title,
        description: description,
        type: type,
        dueDate: date.toISOString().slice(0, 10),
      };
      const res = await axios.put(
        `http://localhost:3000/edit-task/${id}`,
        body,
        options
      );
      if (res.status !== 200) {
        throw new Error();
      }
      refetch()
      handleClose()
    } catch (error) {
      console.error(error);
    }
}

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className="flex w-full items-center justify-center"
    >
      <Box className="max-w-[1000px] h-[600px] task flex-grow mx-4 rounded-md w-full p-4 flex md:flex-row flex-col items-center justify-center">
        <section className="w-full flex flex-col gap-8">
          <input
            type="text"
            placeholder="Enter task title"
            className="w-full max-h-14 flex-grow outline-none border-b-2 bg-transparent font-bold text-center"
            value={title}
            ref={titleRef}
            onChange={handleChange}
            required={true}
          />
          <textarea
            type="text"
            placeholder="Enter description"
            className="w-full max-h-48 flex-grow outline-none bg-transparent font-light"
            value={description}
            ref={descriptionRef}
            onChange={handleChange}
          />
          <ReactSelect
            options={taskTypes}
            className="max-w-60 font-light text-sm tracking-wide"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "var(--global-card-bg)",
                color: "black",
              }),
            }}
            placeholder = { type }
            value={type}
            onChange={(e) => setType(e.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="w-full flex-grow outline-none"
              sx={{ color: "white" }}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "red",
                }),
              }}
              value={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </LocalizationProvider>

          <Button title={"Edit Task"} onClick={handleEdit} />
        </section>
      </Box>
    </Modal>
  );
}
