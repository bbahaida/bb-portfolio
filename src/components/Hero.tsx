import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  const { paddingX, heroHeadText, heroSubText } = styles;
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#047B97]" />
          <div className="w-1 sm:h-80 h-40 brand-gradient" />
        </div>
        <div>
          <h1 className={`${heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#047B97]">Brahim</span>
          </h1>
          <p className={`${heroSubText} mt-2 text-white-100`}>
            Expert Full-Stack Engineer & Cybersecurity{" "}
            <br className="sm:block hidden" /> Specialist with Java, K8S & Agile
            Certifications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
