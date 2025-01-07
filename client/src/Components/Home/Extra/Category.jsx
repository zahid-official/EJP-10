import { Link } from "react-router-dom";
import card1 from "/assets/card1.png";
import card2 from "/assets/card2.png";
import card3 from "/assets/card3.png";
import card4 from "/assets/card4.png";
import icon1 from "/assets/icon1.png";
import icon2 from "/assets/icon2.png";
import icon3 from "/assets/icon3.png";
import icon4 from "/assets/icon4.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Category = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {/* card-01 */}
      <div className="bg-[#f9f9f9] p-6 rounded-3xl grid xl:grid-cols-3 gap-6">
        <div className="flex justify-center items-center">
          <img src={card1} className="rounded-xl" alt="" />
        </div>

        <div className="xl:col-span-2 flex flex-col gap-3 justify-center">
          <h2 className="text-2xl font-bold text-[#034833]">Business Visa</h2>
          <p>
            Ready to explore and grow your business? We will help you secure
            your business visa, so you can focus on the journey ahead!
          </p>

          <div>
            <Link to="/allVisas">
              <div className="flex justify-between items-center">
                <p className="hover:bg-[#45a735] hover:text-white transition-all duration-300 p-3 inline-flex justify-center items-center border border-[#45a735] text-[#45a735] rounded-2xl custom-icon">
                  <span>
                    <FaArrowRightLong size={20}></FaArrowRightLong>
                  </span>
                </p>
                <img src={icon1} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* card-02 */}
      <div className="bg-[#f9f9f9] p-6 rounded-3xl grid xl:grid-cols-3 gap-6">
        <div className="flex justify-center items-center">
          <img src={card2} className="rounded-xl" alt="" />
        </div>

        <div className="xl:col-span-2 flex flex-col gap-3 justify-center">
          <h2 className="text-2xl font-bold text-[#034833]">Working Visa</h2>
          <p>
            Discover new horizons and embrace the adventure that awaits. Let us
            help you secure your working visa, so you can focus on the exciting
            journey ahead!
          </p>

          <div>
            <Link to="/allVisas">
              <div className="flex justify-between items-center">
                <p className="hover:bg-[#45a735] hover:text-white transition-all duration-300 p-3 inline-flex justify-center items-center border border-[#45a735] text-[#45a735] rounded-2xl custom-icon">
                  <span>
                    <FaArrowRightLong size={20}></FaArrowRightLong>
                  </span>
                </p>
                <img src={icon2} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* card-03 */}
      <div className="bg-[#f9f9f9] p-6 rounded-3xl grid xl:grid-cols-3 gap-6">
        <div className="flex justify-center items-center">
          <img src={card3} className="rounded-xl" alt="" />
        </div>

        <div className="xl:col-span-2 flex flex-col gap-3 justify-center">
          <h2 className="text-2xl font-bold text-[#034833]">Student Visa</h2>
          <p>
            Open the door to new learning experiences and endless possibilities.
            We wll help you secure your student visa, so you can focus on your
            educational journey abroad!
          </p>

          <div>
            <Link to="/allVisas">
              <div className="flex justify-between items-center">
                <p className="hover:bg-[#45a735] hover:text-white transition-all duration-300 p-3 inline-flex justify-center items-center border border-[#45a735] text-[#45a735] rounded-2xl custom-icon">
                  <span>
                    <FaArrowRightLong size={20}></FaArrowRightLong>
                  </span>
                </p>
                <img src={icon3} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* card-04 */}
      <div className="bg-[#f9f9f9] p-6 rounded-3xl grid xl:grid-cols-3 gap-6">
        <div className="flex justify-center items-center">
          <img src={card4} className="rounded-xl" alt="" />
        </div>

        <div className="xl:col-span-2 flex flex-col gap-3 justify-center">
          <h2 className="text-2xl font-bold text-[#034833]">Student Visa</h2>
          <p>
            Ready to explore the world and create unforgettable memories? Let us
            help you secure your tourist visa, so you can focus on the
            adventures that await!
          </p>

          <div>
            <Link to="/allVisas">
              <div className="flex justify-between items-center">
                <p className="hover:bg-[#45a735] hover:text-white transition-all duration-300 p-3 inline-flex justify-center items-center border border-[#45a735] text-[#45a735] rounded-2xl custom-icon">
                  <span>
                    <FaArrowRightLong size={20}></FaArrowRightLong>
                  </span>
                </p>
                <img src={icon4} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
