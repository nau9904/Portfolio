import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";

import styles from "../styles";
import { textVariant, slideIn } from "../utils/motion";

const Public_KEY = "gxWjkM4b7MwX8nGOq";
const TemplateID = "template_upil34k";
const ServiceID = "service_bkdw2l9";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .send(
        ServiceID,
        TemplateID,
        {
          from_name: form.name,
          to_name: "DUC MANH",
          from_email: form.email,
          to_email: "sparrowbaby1704@gmail.com",
          message: form.message,
        },
        Public_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I well get back to you as soon as possible.");

          setForm({ name: "", email: "", message: "" });
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
          <label className="flex flex-col w-[30%] min-w-[380px]">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="py-4 px-6 placeholder:text-secondary text-slate-700 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col w-[30%] min-w-[380px]">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="text-slate-700 py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col w-[30%] min-w-[380px]">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Let's me know!"
              className="text-slate-700 py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="py-3 bg-violet-600 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "about");
