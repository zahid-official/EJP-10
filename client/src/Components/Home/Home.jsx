import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import AboutUs from "./Extra/AboutUs";
import Process from "./Extra/Process";
import { FaArrowRightLong } from "react-icons/fa6";
import Category from "./Extra/Category";
import Overview from "./Extra/Overview";
const Home = () => {
  // useLoader
  const data = useLoaderData();
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>

      {/* aboutUs */}
      <section className="sm:pt-20 pb-8">
        <AboutUs></AboutUs>
      </section>

      {/* Latest visas section */}
      <section className="px-4 mt-36">
        <div className="text-center">
          <SectionTitle
            subHeading={"Latest Visas"}
            heading={"Discover New Visas & Key Details"}
          ></SectionTitle>
        </div>

        {/* visas */}
        <div className="flex flex-wrap justify-center gap-10 max-w-[90rem] mx-auto mt-20">
          {data.map((card, idx) => (
            <Card key={card._id} card={card} idx={idx}></Card>
          ))}
        </div>

        {/* button */}
        <div className="text-center mt-20">
          <Link to={`/allVisas`} className="w-full">
            <button className="btn h-14 px-10 font-bold text-[#185744] bg-white hover:bg-[#45a735] hover:text-white transition-all duration-500 rounded-full">
              See All Visas <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </section>

      {/* process */}
      <section className="bg-[#f1f5eb] py-10 mb-36 w-11/12 mx-auto rounded-3xl mt-32 text-center">
        <div className="pt-16 pb-16">
          <SectionTitle
            subHeading={"Process"}
            heading={"Easy Steps to Fisnish"}
          ></SectionTitle>
        </div>
        <Process></Process>
      </section>

      {/* category */}
      <section className=" my-48">
        <div className="text-center">
          <SectionTitle
            subHeading={"Visa Category"}
            heading={"Seeking Adventure Excitement Await"}
          ></SectionTitle>
        </div>

        <div className="max-w-[90rem] mx-auto mt-20 px-4">
          <Category></Category>
        </div>
      </section>

      {/* overview */}
      <section className=" my-36 bg-[#f1f5eb] bg-[url(/assets/shape.png)] py-32 w-11/12 rounded-3xl mx-auto">
        <div className="text-center text-[#034833]">
          <SectionTitle
            subHeading={"Overview"}
            heading={"Unforgettable Getaways Escaping Routine"}
          ></SectionTitle>
        </div>

        <div className=" mt-20 px-4">
          <Overview></Overview>
        </div>
      </section>
    </div>
  );
};

export default Home;
