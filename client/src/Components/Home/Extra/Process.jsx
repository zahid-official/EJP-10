


const Process = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 justify-center  items-center justify-self-center xl:gap-20 gap-10 pb-20 xl:bg-[url(/assets/bg1.png)] bg-no-repeat" style={{"backgroundPosition" : '50% 30%'}}>
      {/* process-01 */}
      <div className="bg-[#f7f8f2] justify-self-center sm:h-80 sm:w-80 h-72 w-72 flex justify-center items-center rounded-full relative">
        <div className="bg-white sm:h-72 sm:w-72 h-64 w-64  space-y-2.5 text-center rounded-full flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold">
            Fill In The <br /> Required Form
          </h2>
          <p className="">
            Filling in our application form <br /> is the gateway
          </p>
        </div>

        <div className="bg-[#45a735] h-24 w-24 rounded-full text-white flex flex-col justify-center items-center absolute top-2 left-5">
          <h2 className="text-3xl font-extrabold">01</h2>
          <p className=" font-semibold">Step</p>
        </div>
      </div>

      {/* process-02 */}
      <div className="bg-[#f7f8f2] justify-self-center sm:h-80 sm:w-80 h-72 w-72 flex justify-center items-center rounded-full relative">
        <div className="bg-white sm:h-72 sm:w-72 h-64 w-64   space-y-2.5 text-center rounded-full flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold">
          Submit All <br />
          Your Documents
          </h2>
          <p className="">
          Submitting all required <br /> documents promptly
          </p>
        </div>

        <div className="bg-[#45a735] h-24 w-24 rounded-full text-white flex flex-col justify-center items-center absolute top-2 left-5">
          <h2 className="text-3xl font-extrabold">02</h2>
          <p className=" font-semibold">Step</p>
        </div>
      </div>

      {/* process-03 */}
      <div className="bg-[#f7f8f2] justify-self-center sm:h-80 sm:w-80 h-72 w-72 flex justify-center items-center rounded-full relative">
        <div className="bg-white sm:h-72 sm:w-72 h-64 w-64  space-y-2.5 text-center rounded-full flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold">
          Get Your  <br />
          Desire Visa
          </h2>
          <p className="">
          Succeed in the competitive <br /> world of accounty
          </p>
        </div>

        <div className="bg-[#45a735] h-24 w-24 rounded-full text-white flex flex-col justify-center items-center absolute top-2 left-5">
          <h2 className="text-3xl font-extrabold">03</h2>
          <p className=" font-semibold">Step</p>
        </div>
      </div>

      {/* process-04 */}
      <div className="bg-[#f7f8f2] xl:hidden justify-self-center sm:h-80 sm:w-80 h-72 w-72 flex justify-center items-center rounded-full relative">
        <div className="bg-white sm:h-72 sm:w-72 h-64 w-64  space-y-2.5 text-center rounded-full flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold">
          Tour Desire  <br />
          Country Easily
          </h2>
          <p className="">
          Navigate competitive world <br /> of accounting with ease
          </p>
        </div>

        <div className="bg-[#45a735] h-24 w-24 rounded-full text-white flex flex-col justify-center items-center absolute top-2 left-5">
          <h2 className="text-3xl font-extrabold">04</h2>
          <p className=" font-semibold">Step</p>
        </div>
      </div>

      
    </div>
  );
};

export default Process;
