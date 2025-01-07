import { useContext, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import ContextAPI from "../Auth/ContextAPI";

const VisaInfo = () => {
  // state for requiredDocuments
  const [requiredDocuments, setRequiredDocuments] = useState({});
  const {users} = useContext(ContextAPI);

  
  // handleValidPassport
  const handleValidPassport = (event) => {
    const checkbox = event.target;
    const validPassport = checkbox.checked ? checkbox.value : null;
    setRequiredDocuments({ ...requiredDocuments, validPassport });
  };

  // handleVisaForm
  const handleVisaForm = (event) => {
    const checkbox = event.target;
    const visaForm = checkbox.checked ? checkbox.value : null;
    setRequiredDocuments({ ...requiredDocuments, visaForm });
  };

  // handleRecentPhotograph
  const handleRecentPhotograph = (event) => {
    const checkbox = event.target;
    const recentPhotograph = checkbox.checked ? checkbox.value : null;
    setRequiredDocuments({ ...requiredDocuments, recentPhotograph });
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    const countryName = event.target.countryName.value;
    const countryFlag = event.target.countryFlag.value;
    const visaType = event.target.visaType.value;
    const processingTime = event.target.processingTime.value;
    const visaFee = event.target.visaFee.value;
    const validatiy = event.target.validatiy.value;
    const applicationMethod = event.target.applicationMethod.value;
    const ageRestriction = event.target.ageRestriction.value;
    const description = event.target.textarea.value;
    const userEmail = users?.email;


    // validation number input
    if (visaFee < 0 || ageRestriction < 0) {
      return toast.error("You Provide a Invalid Number in Number Input Field.");
    }

    const addVisaData = {
      countryName,
      countryFlag,
      visaType,
      processingTime,
      visaFee,
      validatiy,
      applicationMethod,
      ageRestriction,
      requiredDocuments,
      description,
      userEmail,
    };

    // create visaData in mongoDB
    fetch("https://server-one-ashen-40.vercel.app/visa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addVisaData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Visa Added Successfully");
      });
  };

  return (
    <div className="px-5 sm:w-11/12 mx-auto mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        {/* top */}
        <div className="flex items-center justify-center xl:flex-row flex-col gap-10">
          {/* leftside */}
          <div className="w-full sm:px-10 px-5 sm:py-24 py-14 bg-[#f9f9f9] rounded-3xl space-y-8">
            {/* title */}
            <div className="flex sm:flex-row flex-col  items-center sm:justify-start justify-center gap-5 mb-10 sm:text-left text-center">
              <div className="p-8 bg-[#26472b] inline-block rounded-full">
                <FaMapMarkerAlt size={35} color="#78eb54" />
              </div>

              <div>
                <h2 className="sm:text-4xl text-3xl font-bold">
                  Visa Infomations &
                </h2>
                <p className="font-semibold">
                  Please fill out all visa details here.
                </p>
              </div>
            </div>

            {/* row-01 */}
            <div className="flex gap-4 md:flex-row flex-col ">
              <input
                type="text"
                name="countryName"
                placeholder="Country Name"
                className="input input-bordered w-full text-base font-semibold"
                required
              />

              <input
                type="text"
                name="countryFlag"
                placeholder="Upload Country Flag"
                className="input input-bordered w-full text-base font-semibold"
                required
              />
            </div>

            {/* row-02 */}
            <div className="flex gap-4 md:flex-row flex-col">
              <select
                className="select select-bordered w-full text-base font-semibold"
                required="required"
                name="visaType"
              >
                <option value="" disabled selected>
                  Visa Type
                </option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Official Visa">Official Visa</option>
                <option value="Medical Visa">Medical Visa</option>
                <option value="Conference Visa">Conference Visa</option>
              </select>

              <select
                className="select select-bordered w-full text-base font-semibold"
                name="applicationMethod"
                required="required"
              >
                <option value="" disabled selected>
                  Application Method
                </option>
                <option value="Online Visa Application">
                  Online Visa Application
                </option>
                <option value="Visa Application Center">
                  Visa Application Center
                </option>
                <option value="Govt. Visa Application">
                  Govt. Visa Application
                </option>
                <option value="Embassy Application">
                  Embassy Application
                </option>
              </select>
            </div>

            {/* row-03 */}
            <input
              type="number"
              name="visaFee"
              placeholder="Visa Fee (Only Number)"
              className="input input-bordered w-full text-base font-semibold"
              required
            />
          </div>

          {/* rightside */}
          <div className="w-full sm:px-10 px-5 sm:py-24 py-14 bg-[#f9f9f9] rounded-3xl space-y-8">
            {/* title */}
            <div className="flex sm:flex-row flex-col  items-center sm:justify-start justify-center gap-5 mb-10 sm:text-left text-center">
              <div className="p-8 bg-[#26472b] inline-block rounded-full">
                <IoDocumentTextOutline size={35} color="#78eb54" />
              </div>

              <div>
                <h2 className="sm:text-4xl text-3xl font-bold">
                  Required Documents
                </h2>
                <p className="font-semibold">
                  Please fill out all documents details here.
                </p>
              </div>
            </div>

            {/* row-01 */}
            <div className="flex gap-4 md:flex-row flex-col">
              <input
                type="text"
                name="validatiy"
                placeholder="Validatiy"
                className="input input-bordered w-full text-base font-semibold"
                required
              />

              <input
                type="text"
                name="processingTime"
                placeholder="Processing Time"
                className="input input-bordered w-full text-base font-semibold"
                required
              />
            </div>

            {/* row-02 */}
            <input
              type="number"
              name="ageRestriction"
              placeholder="Age Restriction (Only Number)"
              className="input input-bordered w-full text-base font-semibold"
            />

            {/* row-03 */}
            <div className="flex gap-4 sm:flex-nowrap flex-wrap ic">
              {/* checkbox-01 */}
              <div className="form-control">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    value={"Valid Passport"}
                    onChange={handleValidPassport}
                    required
                  />
                  <span className="label-text">Valid Passport</span>
                </label>
              </div>

              {/* checkbox-02 */}
              <div className="form-control">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    value={"Visa Application Form"}
                    onChange={handleVisaForm}
                    required
                  />
                  <span className="label-text">Visa Form</span>
                </label>
              </div>

              {/* checkbox-03 */}
              <div className="form-control">
                <label className="label cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    value={"Recent Passport Size Photograph"}
                    onChange={handleRecentPhotograph}
                    required
                  />
                  <span className="label-text">Recent Photograph</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="sm:px-10 px-6 sm:py-16 py-8 bg-[#f9f9f9] rounded-3xl text-center">
          <textarea
            rows={"4"}
            name="textarea"
            placeholder="Description..."
            className="textarea textarea-bordered textarea-lg w-full"
            required
          ></textarea>

          <button
            type="submit"
            className="btn hover:bg-[#45a735] px-14 mt-12 text-lg font-semibold custom-effect"
          >
            <span className="z-10">Add Visa</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default VisaInfo;
