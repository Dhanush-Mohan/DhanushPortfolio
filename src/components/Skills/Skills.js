import React from "react";
import { skillsData } from "./utils";
import { Line } from "rc-progress";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import "./skills.css";

const Skills = () => {
  return (
    <div className="main">
      <section id="skills" className="skills">
        <span className="skillTitle">Skills</span>
        <div className="skills__content-wrapper">
          {skillsData.map((item, i) => (
            <div key={i} className="skills__content-wrapper__inner-content">
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: "translateX(-200px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3 className="skills__content-wrapper__inner-content__category-text">
                  {item.label}
                </h3>
                <div className="maindiv">
                  {item.data.map((skillItem, j) => (
                    <AnimateKeyframes
                      play
                      duration
                      keyframes={["opacity:1", "opacity:0"]}
                      iterationCount="1"
                    >
                      <div className="progressbar-wrapper" key={j}>
                        <p className="progressbar-wrapper-p">
                          {skillItem.skillName}
                        </p>
                        <Line
                          percent={skillItem.percentage}
                          strokeWidth="4"
                          strokeColor="gold"
                          trailWidth={"4"}
                          strokeLinecap="square"
                        ></Line>
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
