import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const BACKEND_URI=import.meta.env.VITE_BACKEND_URI;

const LogInComp = ({ setIsLoggedIn }) => {
  // console.log(BACKEND_URI)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // const { isAuthenticated, login, logout } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BACKEND_URI}/login`
        ,JSON.stringify(formData),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
        }
      );

      // console.log(setIsLoggedIn);
      // setIsLoggedIn(true);
      if (response.status === 200) {
        setIsLoggedIn(true);
        toast.success("Login Successful");
        navigate("/services");
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 401) {
          toast.error("Incorrect Password");
        } else if (status === 404) {
          toast.error("User not found");
        } else if (status === 422) {
          toast.error("Email and password are required");
        } else if (status === 500) {
          toast.error("Internal Server Error");
        } else {
          toast.error("An error occurred");
        }
      } else {
        toast.error("Network Error");
      }
    }
  };

  return (
    <div className="flex flex-col p-4 max-w-[603px] text-white">
      <div className="self-center text-6xl whitespace-nowrap leading-[63.84px] max-md:text-4xl pb-5">
        Log In
      </div>
      <div className=" flex justify-center mt-2 text-white">
        New to True Market Leaders? {"  "}
        <Link to="/signup">
          <span className="font-bold"> Sign up here!</span>
        </Link>
      </div>
      <div className="flex flex-col p-6 mt-2 text-base font-semibold rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 max-md:px-5 max-md:max-w-full">
        <form onSubmit={handleSubmit}>
          <div className="justify-center items-start py-4 pr-16 pl-6 mt-4 whitespace-nowrap rounded-xl bg-slate-50 max-md:px-5 max-md:max-w-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              required // Make email field required
            />
          </div>
          <div className="justify-center items-start py-4 pr-16 pl-6 mt-4 whitespace-nowrap rounded-xl bg-slate-50 max-md:px-5 max-md:max-w-full">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="appearance-none border-none bg-transparent w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              required // Make password field required
              minLength="8"
              pattern="^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$" 
              title="Password must be at least 8 characters long and include at least one number and one character"
            />
          </div>

          <button
            type="submit"
            className="justify-center items-center px-60 py-4 mt-4 whitespace-nowrap bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl text-slate-50 max-md:px-5 max-md:max-w-full"
          >
            Log In
          </button>
        </form>
        <div className="self-center mt-4 text-white whitespace-nowrap">
          Already have an account?
        </div>
        {/* <div className="self-center mt-4 text-white">Or</div> */}
        {/* <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="flex justify-between items-center px-10 py-4 mt-4 max-w-full text-sm leading-5 text-gray-600 whitespace-nowrap rounded-3xl bg-slate-50 w-[250px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bcbda48d513fc320a691c4d0e398b0243566d8ca042c74c734fa30ed102de3b?apiKey=56eb52f6aee94ff2b3f01637cae0192d&"
              className="my-auto w-3.5 aspect-square"
              alt="Google Logo"
            />
            <div className="grow text-left pl-4">Sign up with Google</div>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default LogInComp;
