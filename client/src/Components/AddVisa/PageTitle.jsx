/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const PageTitle = ({heading1, heading2, subHeading}) => {
    return (
        <div className="text-center px-4 py-14">
            <h2 className="sm:text-6xl text-5xl font-light">{heading1} <span className="font-extrabold">{heading2}</span></h2>
            <p className="text-lg mt-2"><Link to="/" className="hover:text-[#45a735] transition-all duration-300 font-bold">Home</Link> {">"} {subHeading}</p>
        </div>
    );
};

export default PageTitle;