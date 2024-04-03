
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Purchase from './pages/Purchase'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {


  return (
    <div className='p-6 max-md:p-2 bg-gray-100 h-svh'>
  <Navbar />
      <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
