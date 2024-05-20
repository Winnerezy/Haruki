import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Taskbox from "../components/Dashboard/Taskbox";
import { useState } from "react";
import NewTaskModal from "../components/Dashboard/NewTaskModal";

export default function Dashboard() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className="w-full h-full flex flex-col px-4 gap-y-4">
      <section className="w-full flex items-center justify-end pr-8 gap-4 mt-16">
        <div className="flex gap-x-2 p-1 rounded-md button hover:bg-azure-radiance-400 shadow-sm">
          <FilterAltOutlinedIcon />
          <p className="sm:flex hidden">Filter</p>
        </div>
        <div className="flex gap-x-2 p-1 rounded-md button hover:bg-azure-radiance-400 shadow-sm" onClick={handleOpen}>
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
