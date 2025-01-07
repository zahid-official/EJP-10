import { useLoaderData } from "react-router-dom";
import PageTitle from "../AddVisa/PageTitle";
import { toast } from "react-toastify";
import { useContext } from "react";
import ContextAPI from "../Auth/ContextAPI";

const VisaDetails = () => {
  // useContext
  const {users} = useContext(ContextAPI);
  const applicantEmail = users?.email;

  const data = useLoaderData();
  const {
    countryFlag,
    countryName,
    visaType,
    processingTime,
    visaFee,
    validatiy,
    applicationMethod,
    ageRestriction,
    requiredDocuments,
    description,
  } = data;


  // date formating
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + 6);
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const applicantEmail = event.target.applicantEmail.value;
    const appliedDate = event.target.appliedDate.value;
    const fee = event.target.fee.value;

    const applicationData = {
      firstName,
      lastName,
      fee,
      applicantEmail,
      appliedDate,
      countryFlag,
      countryName,
      processingTime,
      visaType,
      validatiy,
      applicationMethod,
    };

    // create applicationsData in mongoDB
    fetch("https://server-one-ashen-40.vercel.app/applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Visa Application Submitted");
      });

    document.getElementById("my_modal_5").close();
  };

  return (
    <div className="pt-16 pb-40">
      <PageTitle
        heading1={"Visa"}
        heading2={"Details"}
        subHeading={"Visa Details"}
      ></PageTitle>

      {/* details */}
      <div>
        <div className="hero shadow-xl xl:w-10/12 w-11/12 mx-auto pt-14 pb-32 rounded-3xl">
          <div className="hero-content gap-10 flex-col lg:flex-row w-full">
            <div className="flex-1 flex justify-center">
              <img src={countryFlag} className="sm:max-w-sm" />
            </div>

            <div className="flex-1 px-4 space-y-1.5">
              {/* heading */}
              <div className="space-y-2">
                <h1 className="sm:text-5xl text-4xl font-bold">
                  {countryName}
                </h1>
                <p className="font-semibold sm:text-xl">
                  Visa Type: {visaType}
                </p>
                <p className="font-semibold sm:text-lg">Fee: ${visaFee}</p>
              </div>

              <br />

              <p>
                <span className="font-semibold">Age Restriction: </span>
                {ageRestriction}
              </p>
              <p>
                <span className="font-semibold">Validatiy: </span>
                {validatiy}
              </p>

              <p>
                <span className="font-semibold">Processing Time: </span>
                {processingTime}
              </p>

              <p>
                <span className="font-semibold">Application Method: </span>
                {applicationMethod}
              </p>

              {/* docs */}
              <div className="py-4 space-y-1">
                <p className="font-extrabold">Required Documents:</p>
                <li>{requiredDocuments.validPassport}</li>
                <li>{requiredDocuments.visaForm}</li>
                <li>{requiredDocuments.recentPhotograph}</li>
              </div>
              <p className="pb-8">
                <span className="font-semibold">Description: </span>
                {description}
              </p>

              <button
                className="btn font-bold px-12 h-14 hover:bg-[#45a735] text-lg custom-effect"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                <span className="z-10">Apply for Visa</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box pt-12 px-10 pb-16 sm:rounded-2xl rounded-none">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl mb-4 font-bold">Apply for Visa</h2>
            <div className="space-y-2.5 mb-10">
              
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Logged In Email</span>
                </label>
                <input
                  type="email"
                  name="applicantEmail"
                  defaultValue={applicantEmail}
                  placeholder="Email"
                  className="input input-bordered"
                  disabled
                />
              </div>

              {/* first name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* last name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* date */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Apply Date</span>
                </label>
                <input
                  type="date"
                  name="appliedDate"
                  placeholder="Apply Date"
                  className="input input-bordered"
                  defaultValue={formattedDate}
                  required
                />
              </div>

              {/* visa fee */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Visa Fee</span>
                </label>
                <input
                  type="number"
                  name="fee"
                  defaultValue={visaFee}
                  placeholder="Visa Fee"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn  hover:bg-[#45a735] text-lg font-semibold custom-effect w-full"
            >
              <span className="z-10">Apply</span>
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default VisaDetails;
