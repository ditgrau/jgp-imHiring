import { useState } from 'react'
import './App.css'
import { Body } from './pages/Body'
import { Navbar } from './components/Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Body />
    </>
  )
}

export default App
