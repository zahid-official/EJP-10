/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

const ApplicationDetails = ({
  application,
  idx,
  loadedData,
  setLoadedData,
}) => {
  const {
    _id: id,
    countryFlag,
    countryName,
    visaType,
    processingTime,
    fee,
    validatiy,
    applicationMethod,
    appliedDate,
    applicantEmail,
    firstName,
    lastName,
  } = application;

  // handleDelete
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://server-one-ashen-40.vercel.app/applicationDetails/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const filtered = loadedData.filter((data) => data._id !== id);
            setLoadedData(filtered);
            Swal.fire({
              title: "Deleted!",
              text: "Your Application has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

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
            <p className="font-semibold text-[#034833]">0{idx + 1}</p>
          </div>

          <h2 className="text-3xl mb-4 font-bold text-[#034833]">
            {countryName}
          </h2>
          <div className="space-y-1.5">
            <p className="text-[#185744]">
              <span className="font-semibold">Fee: </span>${fee}
            </p>
            <p className="text-[#185744]">
              <span className="font-semibold">Validity: </span>
              {validatiy}
            </p>
            <p className="text-[#185744]">
              <span className="font-semibold">Visa Type: </span>
              {visaType}
            </p>
            <p className="text-[#185744]">
              <span className="font-semibold">Processing Time: </span>
              {processingTime}
            </p>
            <p className="text-[#185744]">
              <span className="font-semibold">Application Method: </span>
              {applicationMethod}
            </p>

            <br />
            {/* applicant */}
            <p className="text-[#185744]">
              <span className="font-semibold">Applicant: </span>
              {firstName} {lastName}
            </p>
            <p className="text-[#185744]">
              <span className="font-semibold">Applied Date: </span>
              {appliedDate}
            </p>
            <p className="text-[#185744]">
              <span className="font-semibold">Applied Email: </span>
              {applicantEmail}
            </p>
          </div>
        </div>

        {/* button */}
        <button
          onClick={handleDelete}
          className="btn h-14 px-10 font-bold bg-[#dd3333] text-white hover:bg-[#be0202] hover:text-white transition-all duration-500 rounded-full"
        >
          Cencel <span className="sm:inline hidden">Application</span>
        </button>
      </div>
    </>
  );
};

export default ApplicationDetails;
