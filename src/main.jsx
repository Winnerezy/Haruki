import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>} >
          <Route path='dashboard' element={<Dashboard/>} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
