import React from 'react'
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { educations } from './utils';
import EducationCard from '../Cards/EducationCard';


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

const Education = () => {
  return (
    <section id="edu" className="exp">
      <ExpTitle>
        <span className="expTitle">Education</span>
      </ExpTitle>

      <TimeLineSection>
        <Timeline>
          {educations.map((education, index) => (
            <TimelineItem>
              
              <TimelineContent>
                <EducationCard education={education}></EducationCard>
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary"></TimelineDot>
                {index !== educations.length - 1 && (
                  <TimelineConnector style={{background: "white"}}></TimelineConnector>
                )}
              </TimelineSeparator>
            </TimelineItem>
          ))}
        </Timeline>
      </TimeLineSection>
      <br></br>
      <br></br>
      <br></br>
    </section>
  )
}

export default Education