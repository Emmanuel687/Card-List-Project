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
      <div>
        <Skill skill={"HTML,Css"} />
        <Skill skill={"Javascript"} />
        <Skill skill={"Web-Design"} />
        <Skill skill={"Git and Github"} />
        <Skill skill={"React"} />
        <Skill skill={"Svelte"} />
      </div>
    );
  }
  function Skill({ skill }) {
    return (
      <div className="data">
        <ul className="skill-list">
          <li className="skill">{skill}</li>
        </ul>
      </div>
    );
  }
}

export default App;
