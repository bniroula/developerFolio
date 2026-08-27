// @ts-nocheck
import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
 

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        {skillsSection.softwareSkills.map((group, gi) => (
          <div key={gi} className="skill-group">
            <h4 className="skill-group-title">{group.category}</h4>
            <ul className="dev-icons">
              {group.items.map((skill, i) => (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skill.skillName}
                >
                  {skill.fontAwesomeClassname ? (
                    <i className={skill.fontAwesomeClassname}></i>
                  ) : skill.icon ? (
                    <img src={skill.icon} alt={skill.skillName} style={{width: '50px', height: '50px'}} />
                  ) : null}
                  <p>{skill.skillName}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
