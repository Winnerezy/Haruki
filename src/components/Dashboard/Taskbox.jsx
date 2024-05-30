import { useEffect } from "react";
import TaskCard from "./TaskCard";
import useFetchData from "../../hooks/useFetchData";
import { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import TaskSkeleton from "./TaskSkeleton";
import { Circle } from "@mui/icons-material";
import { Skeleton } from "@mui/material";

export default function Taskbox() {
  const { tasks } = useContext(TaskContext);
  const { isLoading, error } = useFetchData();

  return (
    <div className="size-full shadow-sm overflow-y-auto">
      <section className="w-full sm:h-[calc(100vh-300px)] flex sm:flex-row flex-col gap-5 justify-center min:items-center">
        <div className="space-y-4 flex-grow w-full">
          <div className="flex gap-x-4 bg-[var(--global-card-bg)] w-full sm:max-w-[350px] h-10 rounded-2xl shadow-md p-2">
            <Circle className="text-[var(--not-started-indicator-color)] ml-4" />
            <p className="font-extrabold">TO-DO</p>
          </div>
          <section className="flex flex-col gap-y-4 last:mb-4">
            {isLoading
              ? Array(2)
                  .fill(null)
                  .map((_, index) => <TaskSkeleton key={index} />)
              : tasks
                  .filter((task) => task.status === "Not Started")
                  .map((task, index) => (
                    <TaskCard
                      key={index}
                      id={task._id}
                      title={task.title}
                      description={task.description}
                      type={task.type}
                      dueDate={task.dueDate}
                      status={task.status}
                    />
                  ))}
          </section>
        </div>

        <div className="space-y-4 flex-grow w-full">
          <div className="flex gap-x-4 bg-[var(--global-card-bg)] w-full sm:max-w-[350px] h-10 rounded-2xl shadow-md p-2">
            <Circle className="text-[var(--on-going-indicator-color)] ml-4" />
            <p className="font-extrabold">ON-GOING</p>
          </div>
          <section className="flex flex-col gap-y-4">
            {isLoading
              ? Array(2)
                  .fill(null)
                  .map((_, index) => <TaskSkeleton key={index} />)
              : tasks
                  .filter((task) => task.status === "In Progress")
                  .map((task, index) => (
                    <TaskCard
                      key={index}
                      id={task._id}
                      title={task.title}
                      description={task.description}
                      type={task.type}
                      dueDate={task.dueDate}
                      status={task.status}
                    />
                  ))}
          </section>
        </div>

        <div className="space-y-4 flex-grow w-full">
          <div className="flex gap-x-4 bg-[var(--global-card-bg)] w-full sm:max-w-[350px] h-10 rounded-2xl shadow-md p-2">
            <Circle className="text-[var(--completed-indicator-color)] ml-4" />
            <p className="font-extrabold">COMPLETED</p>
          </div>
          <section className="flex flex-col gap-y-4">
            {isLoading
              ? Array(2)
                  .fill(null)
                  .map((_, index) => <TaskSkeleton key={index} />)
              : tasks
                  .filter((task) => task.status === "Completed")
                  .map((task, index) => (
                    <TaskCard
                      key={index}
                      id={task._id}
                      title={task.title}
                      description={task.description}
                      type={task.type}
                      dueDate={task.dueDate}
                      status={task.status}
                    />
                  ))}
          </section>
        </div>
      </section>
    </div>
  );
}
