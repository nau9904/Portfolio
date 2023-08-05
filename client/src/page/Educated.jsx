import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import styles from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { educates, techskills } from "../constants";
import { certificate } from "../assets";

const EducateCard = ({ educate, index }) => {
  return (
    <motion.div
      variants={fadeIn("down", "spring", index * 0.5, 1)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col max-w-[250px] justify-center items-center rounded-md bg-gradient-to-b from-white to-slate-700"
    >
      <div className="relative w-[95%] h-[95%] mt-1">
        <a href={educate.couseLink} target="_blank">
          <img src={educate.imgURL} />
        </a>
        <div className="absolute top-[1px] right-[1px] flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(educate.certificateURL, "_blank")}
            className="bg-white w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={certificate}
              alt="link couse"
              className="w-2/3 h-2/3 object-contain"
            />
          </div>
        </div>
      </div>
      <h4 className="text-white px-1">{educate.couseName}</h4>
    </motion.div>
  );
};

const TechCard = ({ tech, index }) => {
  return (
    <motion.div
      variants={fadeIn("down", "spring", index * 0.25, 1)}
      initial="hidden"
      whileInView="show"
      whileHover={{ scale: 1.2 }}
      className="flex justify-center items-center rounded-full w-12 h-12 bg-slate-200"
    >
      <img src={tech.img} className="w-[90%] h-[90%]" />
    </motion.div>
  );
};

const Educated = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} px-2`}>Educated & Tech</h2>
      </motion.div>

      <div className="grid justify-center gap-10 grid-cols-4 px-10 mt-10 lg:grid-cols-1 w-full h-auto">
        {educates.map((educate, index) => (
          <EducateCard key={educate.id} index={index} educate={educate} />
        ))}
      </div>

      {/* Tech skill */}
      <motion.div
        variants={textVariant()}
        className="flex relative w-full h-auto justify-center mt-10"
      >
        <h1 className="font-bold text-white text-lg">| Tech Skill</h1>
      </motion.div>
      <div className="w-full px-5 pt-[50px] grid grid-rows-2 grid-flow-col gap-5 justify-around">
        {techskills.map((tech, index) => (
          <TechCard key={`${tech.name} tect`} index={index} tech={tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Educated, "educated");
