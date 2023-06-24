import React from "react";
import "./features.css";

export const featuresData = [
  {
    title: "Personalized Interview Simulations",
    text: "Experience realistic interview scenarios tailored to your industry and job role. Our platform generates customized interview simulations that closely mimic real-life scenarios, allowing you to practice and refine your responses with confidence.",
  },
  {
    title: "AI-Powered Real-Time Feedback:",
    text: "Receive instant, AI-powered feedback on your interview performance. Our advanced natural language processing capabilities analyze your answers, evaluating crucial aspects such as communication skills, clarity, and relevance. Get constructive suggestions and tailored recommendations to enhance your interview techniques.",
  },
  {
    title: "Industry-Specific Question Bank",
    text: "Explore a vast database of industry-specific interview questions. Gain exposure to the types of questions commonly asked in your field and ensure you're well-prepared to handle any challenge that comes your way. Our platform keeps you ahead of the curve by offering a diverse range of questions tailored to your desired job sector.",
  },
  {
    title: "Progress Tracking and Performance Analytics",
    text: "Track your progress and measure your interview readiness over time. Our platform provides detailed analytics and performance insights, allowing you to monitor your improvement, identify strengths and weaknesses, and focus your efforts on areas that need additional attention.",
  },
];

export const Features = () => (
  <div className="techsphere__features section__padding" id="features">
    <div className="techsphere__features-heading">
      <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <h4 className="text-orange-600 mt-10">
        Request Early Access to Get Started
      </h4>
    </div>
    <div className="techsphere__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export const Feature = ({ title, text }) => (
  <div className="techsphere__features-container__feature">
    <div className="techsphere__features-container__feature-title">
      <h1>{title}</h1>
    </div>
    <div className="techsphere__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);
