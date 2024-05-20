import { Outlet } from "react-router"
import SignUp from "./pages/SignUp"
import Topbar from "./components/NavBar/Topbar";

function App() {

  return (
    <main className="w-full min-h-screen flex">
      <section></section>
      <section className="size-full flex flex-col">
        <Topbar/>
        <Outlet />
      </section>
    </main>
  );
}

export default App
