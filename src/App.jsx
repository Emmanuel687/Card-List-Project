import React from "react";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
      for each web dev skill that you have,
      customized with props */}
        <SkillList />
      </div>
    </div>
  );

  function Intro() {
    return (
      <div>
        <h1>Emmanuel Koech</h1>
        <p>
          Front-End Developer with expertise in React, Javascript.When not
          coding I enjoy learning forex trading or just enjoy the beautiful
          Diani beach
        </p>
      </div>
    );
  }

  function Avatar() {
    return (
      <div>
        <img src="images/me.jpeg" alt="image" className="avatar" />
      </div>
    );
  }
  function SkillList() {
    return (
      <div className="skill-list">
        <Skill skill={"HTML+Css"} color="#123456" />
        <Skill skill={"Javascript"} color="orangered" />
        <Skill skill={"Web-Design"} color="yellow" />
        <Skill skill={"Git and Github"} color="orange" />
        <Skill skill={"React"} color="green" />
      </div>
    );
  }
  function Skill({ skill, color }) {
    return (
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
      </div>
    );
  }
}

export default App;
