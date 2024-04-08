import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Purchase from './pages/Purchase';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import Plan from './pages/Plan';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [emailAddress, setEmailAddress] = useState('');

  return (
    <>
      <div className=" bg-gray-900 flex flex-col">
        <Navbar />
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
