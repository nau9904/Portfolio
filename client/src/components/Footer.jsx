import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-auto w-[70%] justify-center">
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2023 - DUC MANH
            </p>
          </div>

          <div className="flex items-center">
            <div className="px-10">
              <p className="font-normal text-[14px] text-white">
                {" "}
                +82 10-9651-3969
              </p>
              <p className="font-normal text-[14px] text-white">
                {" "}
                sparrowbaby1704@gmail.com
              </p>
            </div>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a href={social.link} key={social.name} target="_blank">
                  <img
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                  ></img>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
