
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Purchase from './pages/Purchase'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'
import Plan from './pages/Plan'


function App() {
  const [email, setEmail] = useState(null);
  const [emailAddress, setEmailAddress] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
<>

  <div className=' bg-gray-900 flex flex-col'>
  <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/login" element={<Login setEmail={setEmail} setEmailAddress={setEmailAddress} />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/purchase" element={<Purchase />} /> */}
          <Route path="/pricing" element={<Plan isLoggedIn={email} emailAddress={emailAddress} />} />
          <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      </div>

    
    </>
  )
}

export default App
