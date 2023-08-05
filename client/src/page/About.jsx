import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import styles from "../styles";
import { image_02 } from "../assets";
import { textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} px-2`}>About</h2>
      </motion.div>

      <div className="mt-10 flex justify-center gap-10 w-full h-auto lg:flex-col">
        <div className="lg:w-full w-1/4 flex justify-center items-center">
          <div className="w-[250px] h-[250px] lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] xs:w-[100px] xs:h-[100px]">
            <img
              src={image_02}
              alt="logo"
              className="w-full h-full object-cover rounded-full bg-slate-400"
            ></img>
          </div>
        </div>

        <div className='flex w-1/3 justify-start items-center lg:w-full'>
          <p><span>&nbsp;</span>My backgroud is software engineer and I love to help people build an own website. I graduated with a degree in information technology from Daegu University and I am interested in developing websites. With good self-study skills I do well in learning new technologies. Contact me to know more.</p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
