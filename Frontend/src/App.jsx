import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Achievements from './pages/Achievements'
import Login from './pages/Login'
import Layout from './pages/Layout'
import { Routes, Route } from 'react-router-dom'
import Registration from './pages/Registration'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path= "/experience" element = {<Experience/>}/>
      <Route path="/projects" element={<Projects />} />
      <Route path="/achievements" element={<Achievements />}></Route>
      <Route path="/Login" element={<Login />} />
      <Route path= "/Registration" element={<Registration/>} />
      </Route>    
    </Routes>
  )
}

export default App
