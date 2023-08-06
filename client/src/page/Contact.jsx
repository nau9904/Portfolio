import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";

import styles from "../styles";
import { textVariant, slideIn } from "../utils/motion";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../utils/validators";
import { useForm } from "../hook/formHook";
import Input from "../components/Input";

const Public_KEY = "gxWjkM4b7MwX8nGOq";
const TemplateID = "template_upil34k";
const ServiceID = "service_bkdw2l9";

const Contact = () => {
  const formRef = useRef();
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [loading, setLoading] = useState(false);

  // const handleChange = (event) => {
  //   const { target } = event;
  //   const { name, value } = target;

  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    await emailjs
      .send(
        ServiceID,
        TemplateID,
        {
          from_name: formState.inputs.name.value,
          to_name: "DUC MANH",
          from_email: formState.inputs.email.value,
          to_email: "sparrowbaby1704@gmail.com",
          message: formState.inputs.message.value,
        },
        Public_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I well get back to you as soon as possible.");

          inputHandler({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again!");
        }
      );
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} px-2`}>Contact</h2>
      </motion.div>

      <div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex bg-black-100 p-8 rounded-2xl"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col justify-between items-center gap-8 w-full"
        >
          <Input
            id="name"
            element="input"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE]}
            placeholder="Your good name!"
            errorText="Please enter a valid name."
            onInput={inputHandler}
          />

          <Input
            id="email"
            element="input"
            type="email"
            label="Your Email"
            placeholder="What's your email address?"
            validators={[VALIDATOR_EMAIL]}
            errorText="Please enter a valid email"
            onInput={inputHandler}
          />

          <Input
            id="message"
            element="textarea"
            label="Your Message"
            placeholder="Let's me know!"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter at least 6 character!"
            onInput={inputHandler}
          />

          <button
            type="submit"
            disabled={!formState.isValid}
            className={`py-3 ${
              !formState.isValid ? "bg-violet-200" : "bg-violet-600"
            } px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "about");
