import React from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { image_03 } from "../assets";
import { fadeIn, staggerContainer } from "../utils/motion";

const Home = () => {
  return (
    <section id="home" className={`${styles.yPaddings} mt-40 sm:pl-6 pl-16`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`w-full mx-auto flex justify-center sm:flex-col sm:px-10 relative`}
      >
        <div className="flex justify-center flex-col mr-[50px] z-10 w-full static">
          <img
            src={image_03}
            className=" w-auto px010 opacity-50 object-cover"
          />
          <div className="absolute w-[400px] h-[200px] top-32 xl:top-10 xl:left-24 lg:top-2 left-80 lg:left-12">
            <motion.h1
              variants={fadeIn("down", "tween", 0.1, 1)}
              className={`${styles.heroHeading}`}
            >
              Hi There!
            </motion.h1>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className={`${styles.heroHeading}`}
            >
              I'm Duc Manh
            </motion.h1>
            <motion.h4
              variants={fadeIn("up", "tween", 0.2, 1)}
              className={`${styles.paramText}`}
            >
              I'm proud to be a software developer
            </motion.h4>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
