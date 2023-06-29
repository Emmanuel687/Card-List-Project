import React from "react";
import "./index.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];


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
        {skills.map((skill,index)=><Skill key={index} skill={skill} />)}
    
      </div>
    );
  }
  function Skill({ skill, color }) {
    return (
      <div className="skill" style={{ backgroundColor:`${skill.color}` }}>
        <span>{skill.skill}</span>
        <span>{skill.level==="beginner"&&"💪"}</span>
        <span>{skill.level==="advanced"&&"👍"}</span>
        <span>{skill.level==="intermediate"&&"👶"}</span>


      </div>
    );
  }
}

export default App;
