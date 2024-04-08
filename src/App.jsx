import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Plan from './pages/Plan';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { PropagateLoader } from 'react-spinners';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [emailAddress, setEmailAddress] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async () => {
    try{
      const response = await axios.get('http://localhost:3000/api/authenticate', { withCredentials: true });

      if (response.status === 200) {
      setIsLoggedIn(response.data.isAuthenticated);
      }else if (response.status === 401) {
        setIsLoggedIn(false);
      }else{
        setIsLoggedIn(false);
      }
    }catch(error) {
      console.error('Error fetching data:', error.message);
    }
    finally{
      setLoading(false);
    }
  }

  fetchData();
  })


  if (loading) {
    // Render loading indicator or placeholder while data is being fetched
    return (
      <div className="bg-gray-900 flex justify-center items-center h-svh">
        <PropagateLoader color="#006590" loading={true} size={15} />
      </div>
    );
  }

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
            element={isLoggedIn? <Navigate to="/" /> :<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signup" element={isLoggedIn? <Navigate to="/" /> : <SignUp />} />
          <Route
            path="/pricing"
            element={
              <Plan isLoggedIn={setIsLoggedIn} emailAddress={emailAddress} />
            }
          />
          <Route
            path="/services"
            element={isLoggedIn ? <Services /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
