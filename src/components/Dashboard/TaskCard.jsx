import axios from "axios";
import { useState } from "react";
import EditTaskModal from "../Modals/EditTaskModal";
import useFetchData from "../../hooks/useFetchData.js";
import { Delete } from "@mui/icons-material";
import dayjs from "dayjs";
import { CheckBox } from "@mui/icons-material";
import { Check } from "@mui/icons-material";

export default function TaskCard({ id, title, description, dueDate, type, status }) {
  const [isOpen, setIsOpen] = useState(false);
  const { refetch } = useFetchData();

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/delete-task/${id}`, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async(id) => {
    try {
      await axios.put(`http://localhost:3000/edit-status/${id}`, null, {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  }
  
  // the date and time of the task in a standard format 
const dueFormatted = dayjs(dueDate).format("LLLL");

// the current date and time in a standard format
const today = dayjs(new Date()).format("LLLL"); 


  return (
    <section className="relative flex flex-col justify-between gap-y-4 w-full sm:max-w-[350px] h-[300px] rounded-3xl shadow-lg bg-[var(--global-card-bg)] p-4 hover:bg-[var(--global-card-hover-bg)] hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer">
      <p className="text-2xl font-bold tracking-wide max-w-full line-clamp-2">
        {title}
      </p>
      <p className="line-clamp-4">{description}</p>
      <section className="w-full flex flex-col gap-y-2">
        <div className="flex justify-between">
          <div
            className={`w-[100px] h-[30px] border-2 rounded-full flex items-center justify-center ${
              type === "personal"
                ? "border-[var(--personal-indicator)]"
                : type === "school"
                ? "border-[var(--school-indicator)]"
                : type === "work"
                ? "border-[var(--work-indicator)]"
                : ""
            } `}
          >
            <span
              className={`font-light text-sm first-letter:uppercase text-center ${
                type === "personal"
                  ? "text-[var(--personal-indicator)]"
                  : type === "school"
                  ? "text-[var(--school-indicator)]"
                  : type === "work"
                  ? "text-[var(--work-indicator)]"
                  : ""
              }
           `}
            >
              {type}
            </span>
          </div>
          <div className={`${status === "Completed" ? "hidden" : ""}`}>
            <Check onClick={() => handleStatus(id)} />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span
            className={`font-semibold text-sm ${
              dueFormatted < today
                ? "text-[var(--overdue-indicator-color)]"
                : ""
            }`}
          >{`Due ${dueFormatted}`}</span>
          <Delete onClick={() => handleDelete(id)} />
        </div>
      </section>
    </section>
  );
}
