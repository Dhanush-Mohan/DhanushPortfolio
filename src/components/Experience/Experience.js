import React from "react";
import { expData } from "./utils";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";

const TimeLineSection = styled.div`
  width: 100%;
  max-widht: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const ExpTitle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Experience = () => {
  return (
    <section id="exp" className="exp">
      <ExpTitle>
        <span className="expTitle">Experience</span>
      </ExpTitle>

      <TimeLineSection>
        <Timeline>
          {expData.map((experience, index) => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary"></TimelineDot>
                {index !== expData.length - 1 && (
                  <TimelineConnector></TimelineConnector>
                )}
              </TimelineSeparator>
              <TimelineContent>
                <ExperienceCard experience={experience}></ExperienceCard>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </TimeLineSection>
    </section>
  );
};

export default Experience;
