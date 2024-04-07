import * as React from "react";

function About() {
  return (
    <div className="flex flex-col md:px-56 md:pb-32 max-md:px-8 max-md:py-4 text-base text-white">
  <header className="self-center pt-16 text-6xl text-center leading-[63.84px] max-md:text-4xl">
    About True Market Leaders
  </header>
  <div className="mt-10 w-full max-md:max-w-full">
    At True Market Leaders, we combine cutting-edge technology with expert insights to redefine stock analysis for traders and investors. Our journey began with a team of diverse experts—seasoned traders, data scientists, and financial analysts—united by a shared vision: to empower individuals with the tools and knowledge needed to succeed in the stock market.
    <br />
    <br />
    With this mission driving us forward, True Market Leaders was founded—a platform designed to democratize access to advanced stock analysis, without the complexity or high costs associated with traditional financial services. Our goal is to provide users with actionable insights and strategies, allowing them to navigate the markets confidently and make informed investment decisions.
    <br />
  </div>

  <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full flex md:flex-row max-md:flex-col">
    <div className="md:w-1/2 sm:w-full flex flex-col">
      But our vision extends beyond just providing analysis. True Market Leaders is built upon a foundation of innovative tools and methodologies, including our proprietary "Market Mastery" framework—a proven approach to understanding market trends and identifying lucrative opportunities.
      <br />
      <br />
      Whether you're a novice trader or a seasoned investor, True Market Leaders is your partner in navigating the complexities of the stock market. Our platform leverages advanced analytics and artificial intelligence to deliver real-time insights and personalized recommendations, helping you stay ahead of the curve and achieve your financial goals.
    </div>
    {/* <div className="md:w-1/3 sm:w-full md:pl-4 sm:my-4">
      <img src="about.png" alt="About True Market Leaders" className="w-full h-auto" />
    </div> */}
  </div>

  <div className="my-6 w-full max-md:max-w-full">
    Join us in revolutionizing the way individuals approach stock analysis and investment. With True Market Leaders, empower yourself with the knowledge and tools needed to become a confident and successful trader or investor. Because we believe that everyone deserves the opportunity to thrive in the dynamic world of finance.
  </div>
</div>

  );
}

export default About;