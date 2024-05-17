import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ThemeProvider from './components/ThemeContext.jsx'
import React from 'react'
import NoPage from './pages/NoPage.jsx'
import Onboarding from './pages/Onboarding.jsx'
import SignIn from './pages/Signin.jsx'
import SignUp from './pages/Signup.jsx'
import Pomodoro from './pages/Pomodoro.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="daily-tasks" element={<Home />} />
            <Route path="pomodoro" element={<Pomodoro />} />
          </Route>
          <Route path="/welcome" element={<Onboarding />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
