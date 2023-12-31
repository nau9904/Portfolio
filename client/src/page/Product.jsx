import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import styles from "../styles";
import { products } from "../constants";
import { image_01, image_04 } from "../assets";
import { textVariant, fadeIn, slideIn } from "../utils/motion";

const Card = ({ product, index }) => {
  return (
    <motion.div
      className="relative flex w-[500px] sm:w-[400px] h-40 sm:h-auto gap-10"
      variants={fadeIn("up", "tween", index * 0.4, 1)}
      initial="hidden"
      whileInView="show"
    >
      <div className="absolute top-[35%] -left-[1.5rem]  flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-r from-white to-violet-500">
        <img
          src={product.productImg}
          className=" w-[80%] h-[80%] object-contain"
        />
      </div>
      <div className="h-full w-1 bg-white"></div>
      <div className=" w-full rounded-md mx-2 my-2 border-solid border-black border-[1px] bg-gradient-to-r from-black to-violet-900">
        <h2 className="font-bold text-white text-[18px] mx-10 mt-1">
          {product.productName}
        </h2>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {product.description.map((item, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-[14px] pl-1 tracking-wider text-slate-300"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="font-normal text-[11px] text-slate-300 mx-2">
          usedTech: {product.usedTech}
        </p>
      </div>
    </motion.div>
  );
};

const Product = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} px-2`}>Product</h2>
      </motion.div>

      <div className="flex justify-around items-center gap-10 w-full h-auto lg:flex-col static">
        <div className="min-h-[300px]">
          <motion.div
            variants={slideIn("left", "tween", 0.25, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-[200px] h-[200px] md:w-[150px] md:h-[150px] absolute top-[30%] left-[10%] lg:left-[20%]"
          >
            <img
              src={image_01}
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>
          <motion.div
            variants={slideIn("left", "tween", 0.15, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-[200px] h-[200px] md:w-[150px] md:h-[150px] absolute top-[50%] lg:top-[30%] left-[30%] lg:left-[60%]"
          >
            <img
              src={image_04}
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>
        </div>

        {products.length >= 1 ? (
          <div className="flex flex-col gap">
            {products.map((product, index) => (
              <Card key={product.productName} index={index} product={product} />
            ))}
          </div>
        ) : (
          <h1 className={`${styles.heroHeading}`}>
            I will update as soon as !
          </h1>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Product, "product");
