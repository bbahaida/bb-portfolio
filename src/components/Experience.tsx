import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences, ExperienceType } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard: React.FC<{ experience: ExperienceType }> = ({
  experience,
}) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{
      borderRight: "7px solid #232631",
    }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
      <ul className="mt-5 ml-5 list-disc space-y-2">
        {experience.points?.map((p, i) => (
          <li
            key={`experience-point-${i}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {p}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { sectionHeadText, sectionSubText } = styles;
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={`${sectionSubText}`}>What I've done so far</p>
        <h2 className={`${sectionHeadText}`}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((ex, idx) => (
            <ExperienceCard key={idx} experience={ex} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
