import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import router from "./router/Router";
import { RouterProvider } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (

    <RouterProvider router={router} />

  )
}

export default App
