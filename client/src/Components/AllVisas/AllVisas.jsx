import { useLoaderData } from "react-router-dom";
import PageTitle from "../AddVisa/PageTitle";
import DisplayVisa from "./DisplayVisa";
import { useState } from "react";

const AllVisas = () => {
  const data = useLoaderData();

  // state for filter
  const [filteredData, setFilteredData] = useState(data);

  // handleFilter
  const handleFilter = (visaType) => {

    fetch(`https://server-one-ashen-40.vercel.app/filters/${visaType}`)
    .then(res => res.json())
    .then(data => {
      setFilteredData(data)
      console.log(data)
    })
  };

  return (
    <div className="pt-16  relative mx-3">
      {/* dropdown */}
      <details className="dropdown absolute top-8 left-16">
        <summary className="btn m-1 text-lg font-bold">Filter by Visa Type</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-3 space-y-3 shadow">
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Tourist Visa")}
            >
              Tourist Visa
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Student Visa")}
            >
              Student Visa
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Medical Visa")}
            >
              Medical Visa
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Official Visa")}
            >
              Official Visa
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Conference Visa")}
            >
              Conference Visa
            </button>
          </li>
        </ul>
      </details>

      <PageTitle
        heading1={"All"}
        heading2={"Visas"}
        subHeading={"All Visas"}
      ></PageTitle>

      <div className="flex flex-wrap justify-center gap-10 max-w-[90rem] mx-auto mt-8 mb-40 ">
        {filteredData.map((visa, idx) => (
          <DisplayVisa key={visa._id} visa={visa} idx={idx}></DisplayVisa>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
