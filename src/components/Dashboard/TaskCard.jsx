import { DeleteForeverOutlined } from '@mui/icons-material'
import { Edit } from '@mui/icons-material'
import axios from 'axios'
import useFetchData from '../../hooks/useFetchData'
import dayjs from 'dayjs'
import { Star } from '@mui/icons-material'
import EditTaskModal from '../Modals/EditTaskModal'
import { useState } from 'react'
import EditModalProvider, { EditModalContext } from '../../EditModalContext'
import { useContext } from 'react'

export default function TaskCard({ id, title, description, dueDate, type, onClick }) {
  
  const { setIsOpen } = useContext(EditModalContext)

  const handleOpen = () => {
    setIsOpen(true);
  };

  const { refetch } = useFetchData()
  const handleDelete = async(id) => {
    try {
      const options = {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${localStorage.getItem("authToken")}`
        }
      }
      await axios.delete(`http://localhost:3000/delete-task/${id}`, options)
      refetch()
    } catch (error) {
      console.log(error)
    }
  }

  const today = dayjs(new Date).format("l")
  const dueDateFormat = dayjs(dueDate).format("l")
  const due = dayjs(dueDate).format("dddd, DD, MMMM, YYYY")

  return (
      <div
        className="mt-8 relative flex flex-col w-full max-w-[400px] p-2 h-[200px] rounded-md shadow-md task hover:bg-[var(--global-card-accent-bg)] hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer"
        onClick={handleOpen}
      >
        <article className="text-md font-semibold text-start max-w-36 sm:max-w-80 line-clamp-1">
          {title}
        </article>
        <section
          className={`flex items-center justify-center gap-x-1 absolute top-2 right-2 border rounded-md p-1 ${
            type === "personal"
              ? "border-yellow-300"
              : type === "work"
              ? "border-purple-300"
              : type === "school"
              ? "border-green-300"
              : ""
          }`}
        >
          <Star
            className={`w-4 h-4 rounded-full ${
              type === "personal"
                ? "text-yellow-300"
                : type === "work"
                ? "text-purple-300"
                : type === "school"
                ? "text-green-300"
                : ""
            }`}
          />
          <p className="first-letter:uppercase w-fit text-sm">{type}</p>
        </section>
        <p className="font-light line-clamp-4 mt-6 text-sm">{description}</p>
        <div className="w-full flex flex-col absolute bottom-2">
          <section className="flex">
            <p
              className={`text-sm ${
                dueDateFormat < today ? "text-red-500" : ""
              }`}
            >
              {`${dueDateFormat < today ? "Was due" : "Due"} ${due}`}
            </p>
            <section className="absolute flex right-4">
              <DeleteForeverOutlined
                onClick={() => handleDelete(id)}
                className="cursor-pointer"
              />
            </section>
          </section>
        </div>
        <EditTaskModal id={id} />
      </div>
  );
}
