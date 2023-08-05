import React from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { react } from "../assets";
import { fadeIn, staggerContainer } from "../utils/motion";

const Home = () => {
  return (
    <section id="home" className={`${styles.yPaddings} mt-40 sm:pl-6 pl-16`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex justify-center flex-row sm:flex-col sm:px-10`}
      >
        <div className="flex justify-center flex-col lg:right-10 relative z-10">
          <motion.h1
            variants={fadeIn("down", "tween", 0.1, 1)}
            className={styles.heroHeading}
          >
            Hi There!
          </motion.h1>
          <motion.h1
            variants={fadeIn("up", "tween", 0.2, 1)}
            className={styles.heroHeading}
          >
            I'm Duc Manh
          </motion.h1>
          <motion.h4
            variants={fadeIn("up", "tween", 0.2, 1)}
            className={styles.paramText}
          >
            I'm proud to be a software developer
          </motion.h4>
        </div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="mx-10"
        >
          <div className="max-w-[300px] max-h-[300px]">
            <img src={react}></img>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
