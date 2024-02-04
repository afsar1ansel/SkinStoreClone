import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import AllRouter from './pages/AllRouter'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <AllRouter/>
    <Footer/>
    </>
  )
}

export default App
