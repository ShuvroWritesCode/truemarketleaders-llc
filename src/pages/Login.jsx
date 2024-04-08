import React from 'react';
import LogInComp from '../components/LogInComp';

const Login = ({ setIsLoggedIn }) => {
  return (
    <div className="flex justify-center items-center">
      <LogInComp setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default Login;
