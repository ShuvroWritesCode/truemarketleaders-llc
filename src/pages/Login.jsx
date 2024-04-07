import React from 'react'
import LogInComp from '../components/LogInComp'

const Login = ({setEmail, setEmailAddress}) => {
  return (
    <div className="flex justify-center items-center">
      <LogInComp setEmail={setEmail} setEmailAddress={setEmailAddress}/>
    </div>
  )
}

export default Login