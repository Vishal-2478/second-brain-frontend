import { DashBoard } from "./components/pages/dashboard"
import "./App.css"
import { Signup } from "./components/pages/Signup"
import { Signin } from "./components/pages/Signin"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SharedBrain } from "./components/pages/SharedBrain"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/share/:hash" element={<SharedBrain />} />
        <Route path="*" element={<h2>404 Page not found</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
