/* eslint-disable react/prop-types */

import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DisplayVisa = ({ visa, idx }) => {
  const {
    _id: id,
    countryName,
    countryFlag,
    visaType,
    visaFee,
    validatiy,
  } = visa;

  return (
    <>
      <div className="justify-self-center bg-[#f6f6f6] bg-[url(/assets/bg-2.png)] bg-cover px-10 py-14 rounded-xl flex flex-col justify-between items-start space-y-8 max-w-[26rem] custom-card">
        {/* img */}
        <div className="h-16 w-16">
          <img
            src={countryFlag}
            alt="flag"
            className="w-full h-full object-cover rounded-[50%]"
          />
        </div>

        {/* content */}
        <div className="pb-2">
          <div className="flex items-center gap-1">
            <div className="h-[1px] w-10 bg-[#83cd20]"></div>
            <p className="font-semibold text-[#034833]">
              {idx < 9 ? 0 : ""}
              {idx + 1}
            </p>
          </div>

          <h2 className="text-3xl mb-4 font-bold text-[#034833]">
            {countryName}
          </h2>
          <div className="space-y-1.5">
            <p className="text-[#185744]">
              <span className="font-semibold">Fee: </span>${visaFee}
            </p>
            <p className="text-[#185744]">
              <span className="font-semibold">Validity: </span>
              {validatiy}
            </p>
            <p className="text-[#185744]">
              <span className="font-semibold">Visa Type: </span>
              {visaType}
            </p>
          </div>
        </div>

        {/* button */}
        <Link to={`/visaDetails/${id}`} className="w-full">
          <button className="btn h-14 px-10 font-bold text-[#185744] bg-white hover:bg-[#45a735] hover:text-white transition-all duration-500 rounded-full">
            More Details <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </>
  );
};

export default DisplayVisa;
