/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal";
const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div>
      <h4 className="bg-[#ecf6ea] inline-block px-5 py-2 rounded-badge text-[#45a735] font-bold border-2 border-[#badeb3]">
        <Fade duration={400} delay={100} cascade damping={1e-1}>
          {subHeading}
        </Fade>
      </h4>

      {/* <Slide direction="right">
        <h2 className="sm:text-5xl text-3xl font-bold mt-5">{heading}</h2>
      </Slide> */}

      <h2 className="sm:text-5xl text-3xl font-bold mt-5">
        <Fade duration={2000} delay={200}>
          {heading}
        </Fade>
      </h2>
    </div>
  );
};

export default SectionTitle;
