import { useState } from 'react'
import './style/App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Heder from './components/Heder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heder />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
