import React from "react";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((t, i) => (
        <div className="w-28 h-28" key={t.name}>
          <BallCanvas icon={t.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
