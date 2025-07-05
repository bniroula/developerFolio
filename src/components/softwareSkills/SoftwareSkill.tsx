// @ts-nocheck
import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
 

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {
                  skills.fontAwesomeClassname ? (
                    <i className={skills.fontAwesomeClassname}></i>
                  ) : skills.icon ? (
                    <img src={skills.icon} alt={skills.skillName} style={{width: '50px', height: '50px'}} />
                  ) : null
                }
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
