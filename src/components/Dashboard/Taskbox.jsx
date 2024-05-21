import { useEffect } from "react";
import TaskCard from "./TaskCard";
import useFetchData from "../../hooks/useFetchData";
import { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import TaskSkeleton from "./TaskSkeleton";
import EditTaskModal from "../Modals/EditTaskModal";
import { useState } from "react";

export default function Taskbox() {
  const { tasks } = useContext(TaskContext);
  const { isLoading } = useFetchData();

  return (
    <div className="size-full taskbox shadow-sm mb-8">
      <section className="w-full lg:h-[500px] lg:overflow-auto flex flex-col gap-y-8 lg:flex-row gap-x-16 px-8 items-start justify-center">
        <div className="last:mb-16 flex flex-col gap-y-4 flex-grow items-start taskbox w-1/3">
          <div className="flex items-center gap-2 font-semibold w-full text-start rounded-md p-1">
            <div className="w-4 h-4 rounded-full bg-[var(--not-started-indicator-color)]"></div>
            <p>Not Started</p>
          </div>
          {isLoading
            ? Array(2)
                .fill(null)
                .map((_, index) => <TaskSkeleton key={index} />)
            : tasks.length !== 0 &&
              tasks
                .filter((task) => task.status === "Not Started")
                .map((task, index) => (
                  <TaskCard
                    key={index}
                    id={task._id}
                    title={task.title}
                    description={task.description}
                    dueDate={task.dueDate}
                    type={task.type}
                  />
                ))}
        </div>

        <div className="flex flex-col gap-y-4 flex-grow items-start taskbox w-1/3">
          <div className="flex items-center gap-2 font-semibold w-full text-start rounded-md p-1">
            <div className="w-4 h-4 rounded-full bg-[var(--inprogress-indicator-color)]"></div>
            <p>In Progress</p>
          </div>
          {isLoading
            ? Array(2)
                .fill(null)
                .map((_, index) => <TaskSkeleton key={index} />)
            : tasks.length !== 0 &&
              tasks
                .filter((task) => task.status === "In Progress")
                .map((task, index) => (
                  <TaskCard
                    key={index}
                    id={task._id}
                    title={task.title}
                    description={task.description}
                    dueDate={task.dueDate}
                    type={task.type}
                  />
                ))}
        </div>

        <div className="flex flex-col gap-y-4 flex-grow min-h-[500px] items-start taskbox w-1/3">
          <div className="flex items-center gap-2 font-semibold w-full text-start rounded-md p-1">
            <div className="w-4 h-4 rounded-full bg-[var(--completed-indicator-color)]"></div>
            <p>Completed</p>
          </div>
          {isLoading
            ? Array(2)
                .fill(null)
                .map((_, index) => <TaskSkeleton key={index} />)
            : tasks.length !== 0 &&
              tasks
                .filter((task) => task.status === "Completed")
                .map((task, index) => (
                  <TaskCard
                    key={index}
                    id={task._id}
                    title={task.title}
                    description={task.description}
                    dueDate={task.dueDate}
                    type={task.type}
                  />
                ))}
        </div>
      </section>
    </div>
  );
}
