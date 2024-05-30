import { Outlet } from "react-router"
import SignUp from "./pages/SignUp"
import Topbar from "./components/NavBar/Topbar";
import Sidebar from "./components/NavBar/Sidebar";
import BottomBar from "./components/NavBar/BottomBar";

function App() {

  return (
    <main className="w-full min-h-screen flex">
      <Sidebar/>
      <section className="relative w-full min-h-screen flex flex-col">
        <Topbar/>
        <Outlet />
        <BottomBar/>
      </section>
    </main>
  );
}

export default App
