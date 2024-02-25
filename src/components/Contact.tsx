import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Initialize EmailJS outside component to avoid re-initialization on every render.
emailjs.init("L7wmyEXDvvBpXviKb");

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_m6b0oum", "template_6329rqz", {
        from_name: formData.name,
        to_name: "Brahim",
        from_email: formData.email,
        to_email: "brahim.bahaida@bmbsolutions.net",
        message: formData.message,
      })
      .then((response) => {
        setLoading(false);
        alert("Thank you, I'll get back to you ASAP");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("Failed to send message: ", error);
        alert("Something went wrong!");
      });
  };

  const { sectionHeadText, sectionSubText } = styles;

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-9 rounded-2xl"
      >
        <p className={sectionSubText}>Get in touch</p>
        <h3 className={sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {["name", "email", "message"].map((field) => (
            <label key={field} className="flex flex-col">
              <span className="text-white font-medium mb-4">Your {field}</span>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`What's your ${field}?`}
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              ) : (
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`What's your ${field}?`}
                  rows={7}
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              )}
            </label>
          ))}

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xs:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
