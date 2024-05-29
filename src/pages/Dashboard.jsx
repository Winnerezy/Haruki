import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Taskbox from "../components/Dashboard/Taskbox";
import { useState } from "react";
import NewTaskModal from "../components/Modals/NewTaskModal";
import FilterCard from "../components/Dashboard/FilterCard";
import { Delete } from "@mui/icons-material";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  // const [filterOpen, setFilterOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleFilter = () => {
  //   setFilterOpen((prev) => !prev);
  // };
  return (
    <main className="flex flex-col h-full w-full p-10 gap-y-4">
      <section className="justify-self-end self-end">
        <button
          className="w-[110px] p-1 text-sm text-center font-bold h-8 shadow-lg rounded-full tracking-tighter border-2 border-[var(--global-border)]"
          onClick={handleOpen}
        >
          ADD TASK
        </button>
      </section>
      <Taskbox />
      <NewTaskModal open={open} handleClose={handleClose} />
    </main>
  );
}
