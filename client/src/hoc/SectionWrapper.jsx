import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";

const StartWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.paddings} max-w-8xl mt-20 mx-10 sm:mx-auto relative z-0 overflow-y-hidden`}
      >
        <div className="h-[2px] w-full bg-gradient-to-r from-black to-white" id={idName}></div>

        <Component />
      </motion.section>
    );
  };

export default StartWrapper;
