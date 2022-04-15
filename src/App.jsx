import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import { Signup } from './components/Signup'
import { Login } from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>Hello</div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  )
}

export default App
