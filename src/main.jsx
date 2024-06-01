import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ThemeProvider from "./ThemeContext.jsx";
import SidebarProvider from "./utils/SidebarContext.jsx";
import TaskProvider from "./TaskContext.jsx";
import Calendar from "./pages/Calendar.jsx";
import Pomodoro from "./pages/Pomodoro.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <SidebarProvider>
          <Router>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="tasks" element={<Dashboard />} />
                <Route path="calendar" element={<Calendar />} />
                 <Route path="pomodoro" element={<Pomodoro />} />
              </Route>
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
            </Routes>
          </Router>
        </SidebarProvider>
      </TaskProvider>
    </ThemeProvider>
  </React.StrictMode>
);
