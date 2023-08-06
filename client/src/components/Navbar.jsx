import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, navVariants } from "../utils/motion";
import { menu, close } from "../assets";

const navItems = ["HOME", "RESUME", "ABOUT", "EDUCATED", "PRODUCT"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} z-20 bg-gradient-to-r from-sky-300 to-green-300 py-8 flex justify-center fixed gap-10 w-full`}
    >
      <div className="flex sm:hidden">
        {navItems.map((item) => (
          <div key={item} className={styles.navText}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </div>
        ))}
      </div>

      <div className="hidden sm:flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex flex-col"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <motion.div
            variants={fadeIn("down", "spring", 0.1, 1)}
            initial="hidden"
            whileInView="show"
          >
            {navItems.map((item) => (
              <motion.div key={item} className={styles.navText}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
