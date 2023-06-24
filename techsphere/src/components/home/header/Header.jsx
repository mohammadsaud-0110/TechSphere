import React from "react";
import "./header.css";

export const Header = () => (
  <div className="techsphere__header section__padding" id="home">
    <div className="techsphere__header-content">
      <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Unleash Your Interview Potential With Our AI
      </h1>
      <h2 className="text-white mt-4">
        AI-powered self-interview prep platform – your virtual guide to acing
        interviews and landing your dream job.
      </h2>
      <div className="techsphere__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="techsphere__header-content__people">
        <img src={"assets/people.png"} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
    <div className="techsphere__header-image">
      <img src={"assets/ai.png"} />
    </div>
  </div>
);
