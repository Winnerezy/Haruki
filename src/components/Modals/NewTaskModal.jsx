import { Box, Modal } from "@mui/material";
import Button from "../Shared/Button";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import useFetchData from "../../hooks/useFetchData";
import ReactSelect from "react-select";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

export default function NewTaskModal({ open, handleClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [date, setDate] = useState(dayjs(new Date())); // date picker for the modal
  const [type, setType] = useState("");
  const { refetch } = useFetchData();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = () => {
    setTitle(titleRef.current.value);
    setDescription(descriptionRef.current.value);
  };

  const taskTypes = [
    { value: "personal", label: "Personal" },
    { value: "school", label: "School" },
    { value: "work", label: "Work" },
  ];

  const handleAdd = async () => {
    try {
      setIsLoading(true)
      const options = {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      const body = {
        title: title,
        description: description,
        dueDate: date,
        type: type,
      };
      const res = await axios.post(
        "http://localhost:3000/add-task",
        body,
        options
      );
      if (res.status !== 200) {
        throw new Error();
      }
      handleClose();
      setTitle("");
      setDescription("")
      refetch();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex w-full items-center justify-center"
    >
      <Box className="max-w-[1000px] h-[600px] task flex-grow mx-4 rounded-lg w-full p-4 flex md:flex-row flex-col items-center justify-center">
        <section className="w-full flex flex-col gap-8">
          <input
            type="text"
            placeholder="Enter task title"
            className="w-full max-h-14 flex-grow outline-none bg-transparent font-bold text-3xl placeholder:text-3xl"
            value={title}
            ref={titleRef}
            onChange={handleChange}
            required={true}
          />
          <TextareaAutosize
            placeholder="Enter description"
            className="w-full max-h-48 flex-grow outline-none bg-transparent font-light overflow-auto"
            value={description}
            ref={descriptionRef}
            onChange={handleChange}
          />
          {/* <ReactSelect
            options={taskTypes}
            className="max-w-60 font-light text-sm tracking-wide"
            styles={{
              control: (baseStyles, state) => (
                state.children,
                {
                  backgroundColor: "var(--global-card-bg)",
                  borderColor: "var(--global-border)",
                  display: "flex",
                  borderWidth: "2px",
                  borderRadius: "50px",
                }
              ),
            }}
            placeholder="Select task type"
            value={taskTypes.value}
            onChange={(e) => setType(e.value)}
          /> */}

          <select className="w-full max-w-48 h-8 flex-grow rounded-lg p- bg-[var(--global-secondary)] border-[var(--global-border-bg)]" value={type} onChange={(e)=> setType(e.target.value)}>
            <option value="personal" className="bg-[var(--global-primary)]">Personal</option>
            <option value="school">School</option>
            <option value="work">Work</option>
          </select>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              className="w-full max-w-60 flex-grow"
              style={{ color: "red" }}
              value={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </LocalizationProvider>

          <Button
            title={"Add Task"}
            onClick={handleAdd}
            isLoading={isLoading}
          />
        </section>
      </Box>
    </Modal>
  );
}
