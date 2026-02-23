import { DashBoard } from "./components/pages/dashboard"
import "./App.css"
import { Signup } from "./components/pages/Signup"
import { Signin } from "./components/pages/Signin"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SharedBrain } from "./components/pages/SharedBrain"
import { ProtectedRoute } from "./components/ProtectedRoute"
import LandingPage from "./components/pages/LandingPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />

        <Route path="/share/:hash" element={<SharedBrain />} />
        <Route path="*" element={<h2>404 Page not found</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
