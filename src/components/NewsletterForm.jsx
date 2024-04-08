import * as React from "react";

function NewsletterForm() {
  return (
    <form className="flex flex-col items-center text-base space-y-4 mb-48 mt-16">
      <header className="text-6xl leading-[63.84px] text-white max-md:max-w-full max-md:text-4xl">
  Stay Ahead with True Market Leaders
</header>
<div className="self-stretch mt-4 w-full leading-6 text-center text-white max-md:max-w-full">
  Be the first to receive exclusive insights, tips, and updates tailored
  for investors. Our newsletter brings you the latest on stock market
  analysis, investment strategies,<br /> and special opportunities directly to
  your inbox.
</div>

      <div className="flex items-center justify-between py-1 px-1 bg-white border border-primary rounded-full md:w-[60%] max-md:w-[85%]">
        <input
          type="email"
          placeholder="Email"
          className="flex-grow px-4 py-2 bg-transparent border-none focus:outline-none text-gray-700 w-[80%] placeholder-black"
          
        />
        <button className="px-6 py-3 bg-gradient-to-br from-gray-500 to-gray-600 text-white rounded-full">
          Subscribe
        </button>
      </div>
    </form>
  );
}

export default NewsletterForm;
