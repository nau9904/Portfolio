import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc";

import styles from "../styles";
import { resumes } from "../constants";
import { textVariant } from "../utils/motion";

const ResumeCard = ({ resume }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={resume.time}
      iconStyle={{ background: resume.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={resume.icon}
            alt={resume.id}
            className="w-60% h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <p
          className="text-secondary text-[24px] font-semibold"
          style={{ margin: 0 }}
        >
          {" "}
          {resume.content}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} px-2`}>Resume</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {resumes.map((resume, index) => (
            <ResumeCard key={`resume-${index}`} resume={resume} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
