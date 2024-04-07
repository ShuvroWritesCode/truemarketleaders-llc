import React from "react";
import SectionWithTextAndPicture from "../components/SectionWithTextAndPicture";
import SectionWithText from "../components/SectionWithText";
import NewsletterForm from "../components/NewsletterForm";

export default function Home() {
  return (
    <div className="flex-col md:px-4 py-4 mx-4 my-4 mt-32 text-white">
      <SectionWithTextAndPicture
        title="Your Premier Destination for Stock Analysis"
        subtitle="Empowering Investors with Insightful Analysis"
        text="At True Market Leaders, we leverage cutting-edge technology and expert insights to provide investors with comprehensive stock analysis and investment guidance. Whether you're a novice investor or a seasoned trader, our platform is designed to equip you with the tools and knowledge needed to navigate the dynamic world of the stock market with confidence."
        buttonText="Get Started"
        buttonLink="/signup"
        imageSource="tml.png"
        imageAlt="Stock Analysis"
        textOnLeft={true}
      />
      <SectionWithTextAndPicture
        title="Expert Advice at Your Fingertips"
        subtitle="Unlock the Power of Data-Driven Insights"
        text="Powered by advanced algorithms and real-time data, our platform offers investors access to expert advice and market insights anytime, anywhere. Whether you're looking for analysis on specific stocks, market trends, or investment strategies, our virtual advisors are here to provide personalized recommendations tailored to your unique investment goals."
        buttonText="Explore Our Tools"
        buttonLink="/tools"
        imageSource="tml.png"
        imageAlt="Expert Advice"
        textOnLeft={false}
      />
      <SectionWithText
        title="Comprehensive Analysis and Guidance"
        text="From fundamental analysis to technical indicators, our platform covers a wide range of topics to help investors make informed decisions. Whether you're interested in value investing, growth stocks, or dividend strategies, our platform offers in-depth analysis and actionable insights to support your investment journey."
        buttonText="Learn More"
        buttonLink="/analysis"
      />
      <NewsletterForm />
    </div>
  );
}
