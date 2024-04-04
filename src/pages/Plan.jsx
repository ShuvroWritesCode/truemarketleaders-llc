import React from 'react'
import PlanInfoCard from '../components/PlanInfoCard';

const Plan = ({isLoggedIn ,emailAddress}) => {
  const planFeatures = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bec32ef0adf8fc7537a8f83e965d41ef4ff6e36dd1877c1f65671cc33c0f6c73?apiKey=9a29bea2c99f43cc9fe59f79b667536e&",
      text: "Unlimited access to True Market Leader's powerful tools"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bec32ef0adf8fc7537a8f83e965d41ef4ff6e36dd1877c1f65671cc33c0f6c73?apiKey=9a29bea2c99f43cc9fe59f79b667536e&",
      text: "Customize your trading experience with advanced features"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bec32ef0adf8fc7537a8f83e965d41ef4ff6e36dd1877c1f65671cc33c0f6c73?apiKey=9a29bea2c99f43cc9fe59f79b667536e&",
      text: "Receive expert support and guidance on-demand"
    }
  ];
  return (
    <div className='md:px-32 max-md:px-8 pb-16'>
      <section className="flex flex-col justify-center text-center text-white my-12">
      <header className="w-full text-6xl leading-[63.84px] max-md:max-w-full max-md:text-4xl">
        Transparent, Flexible Pricing
      </header>
      
    </section>
    <div className='flex justify-center'>
    <PlanInfoCard planFeatures={planFeatures} isLoggedIn={isLoggedIn} emailAddress={emailAddress} />
    </div>
    </div>
  )
}

export default Plan