import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((t) => (
        <div className="w-28 h-28" key={t.name}>
          <BallCanvas icon={t.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
