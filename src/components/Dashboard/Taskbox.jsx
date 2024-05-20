import { useEffect } from 'react';
import TaskCard from './TaskCard'
import useFetchData from '../../hooks/useFetchData';

export default function Taskbox() {
  const { tasks } = useFetchData()
  return (
    <div className="size-full taskbox shadow-sm mb-8">
      <section className="flex flex-col gap-y-8 lg:flex-row gap-x-16 px-8 items-start justify-center">
        <div className="flex flex-col gap-y-4 flex-grow items-center taskbox">
          <p className="font-bold profile w-full text-center rounded-md p-1">
            Not Started
          </p>
          {tasks.length !== 0 && tasks
            .filter((task) => task.status === "Not Started")
            .map((task, index) => (
              <TaskCard
                key={index}
                title={task.title}
                description={task.description}
              />
            ))}
        </div>

        <div className="flex flex-col gap-y-4 flex-grow min-h-[500px] items-center taskbox">
          <p className="font-bold profile w-full text-center rounded-md p-1">
            In Progress
          </p>
          { tasks.length !== 0 && tasks
            .filter((task) => task.status === "In Progress")
            .map((task, index) => (
              <TaskCard
                key={index}
                title={task.title}
                description={task.description}
              />
            ))}
        </div>

        <div className="flex flex-col gap-y-4 flex-grow min-h-[500px] items-center taskbox">
          <p className="font-bold profile w-full text-center rounded-md p-1">
            Completed
          </p>
          { tasks.length !== 0 && tasks
            .filter((task) => task.status === "Completed")
            .map((task, index) => (
              <TaskCard
                key={index}
                title={task.title}
                description={task.description}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
