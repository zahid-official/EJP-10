const Overview = () => {
  return (
    <div className="grid-cols-3 flex flex-wrap justify-center items-center gap-10 ">
      {/* card-01 */}
      <div className="bg-white hover:-translate-y-9 transition-all duration-500 sm:px-12 px-6 py-8 rounded-2xl max-w-[27rem]">
        <h2 className="number">01</h2>
        <p className="text-2xl font-bold text-[#034833] mb-3">
          Visa Voyage Agency
        </p>
        <p>
          Relax and explore with Visa Voyage Agency. Your gateway to amazing
          trips!
        </p>
      </div>

      {/* card-02 */}
      <div className="bg-white sm:px-12 hover:translate-y-0 transition-all duration-500 2xl:-translate-y-9 px-6 py-8 rounded-2xl max-w-[27rem]">
        <h2 className="number">02</h2>
        <p className="text-2xl font-bold text-[#034833] mb-3">
          International Access Visas
        </p>
        <p>
          Get easy, fast visa access for global travel with Visa Voyage Agency.
        </p>
      </div>

      {/* card-03 */}
      <div className="bg-white sm:px-12 hover:-translate-y-9 transition-all duration-500 px-6 py-8 rounded-2xl max-w-[27rem]">
        <h2 className="number">03</h2>
        <p className="text-2xl font-bold text-[#034833] mb-3">
          Gateway Global Citizenship
        </p>
        <p>
          Unlock global opportunities with Visa Voyage Agency, your path to
          international living.
        </p>
      </div>
    </div>
  );
};

export default Overview;
