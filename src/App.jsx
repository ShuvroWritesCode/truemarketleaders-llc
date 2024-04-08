import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Purchase from './pages/Purchase';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Plan from './pages/Plan';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');

  // useEffect(()=>{
  //   console.log(isLoggedIn);
  // })

  return (
    <>
      <div className=" bg-gray-900 flex flex-col">
      <ToastContainer />
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/purchase" element={<Purchase />} /> */}
          <Route
            path="/pricing"
            element={
              <Plan isLoggedIn={setIsLoggedIn} emailAddress={emailAddress} />
            }
          />
          <Route
            path="/services"
            // element={isLoggedIn ? <Services /> : <Navigate to="/login" />}
            element={<Services />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
