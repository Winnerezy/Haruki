import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Taskbox from "../components/Dashboard/Taskbox";
import { useState } from "react";
import NewTaskModal from "../components/Modals/NewTaskModal";
import FilterCard from "../components/Dashboard/FilterCard";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFilter = () => {
    setFilterOpen((prev) => !prev);
  };
  return (
    <main className="w-full h-full flex flex-col px-4 gap-y-4">
      <section className="w-full flex items-center justify-end pr-8 gap-4 mt-16">
        <div
          className="flex gap-x-2 p-1 rounded-md button hover:bg-[var(--global-card-bg)] shadow-sm relative"
          onClick={handleFilter}
        >
          <FilterAltOutlinedIcon />
          <p className="sm:flex hidden w-10">Filter</p>
        </div>
        <FilterCard isOpen={filterOpen} />
        <div
          className="flex gap-x-2 p-1 rounded-md button hover:bg-[var(--global-card-bg)] shadow-sm"
          onClick={handleOpen}
        >
          <AddCircleOutlineOutlinedIcon />
          <p className="sm:flex hidden">New Task</p>
        </div>
      </section>
      <section>
        <Taskbox />
      </section>
      <NewTaskModal open={open} handleClose={handleClose} setOpen={setOpen} />
    </main>
  );
}
