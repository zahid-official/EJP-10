import { Link } from "react-router-dom";
import error from "/assets/0.error.png";

const Error = () => {
  return (
    <div>
      <div className="gap-3 flex flex-col items-center justify-center pt-10 px-5 text-center">
        <img src={error} alt="error" />
        <h2 className="md:text-5xl text-4xl font-semibold">
          Oops, looks like the page is lost.
        </h2>
        <p className="md:text-3xl text-2xl">
          This is not a fault, just an accident that was not intentional.
        </p>
        <Link to={"/"}>
          <button className="btn hover:bg-[#45a735] mt-4 text-lg font-semibold custom-effect">
            <span className="z-10">Back to Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
