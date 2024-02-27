import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { info, services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

interface ServiceCardProps {
  title: string;
  index: number;
  icon: any;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ title, index, icon }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  const { sectionHeadText, sectionSubText } = styles;
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={`${sectionSubText}`}>Introduction</p>
        <h2 className={`${sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("right", "spring", 0.5, 0.7)}
      >
        {info.about}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
