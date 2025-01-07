/* eslint-disable react/prop-types */

import { useState } from "react";
import Swal from "sweetalert2";

const MyVisaDetails = ({ visa, idx, myVisas, setMyVisas }) => {
  // state for update
  const [updateData, setUpdateData] = useState(null);

  const {
    _id: id,
    countryFlag,
    countryName,
    visaType,
    processingTime,
    visaFee,
    validatiy,
    applicationMethod,
  } = visa;

  // handleUpdateData read
  const handleUpdateData = (uniqueId) => {
    fetch(`https://server-one-ashen-40.vercel.app/visas/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateData(data);
      });
  };

  // handleModal for update
  const handleModal = (event) => {
    event.preventDefault();

    const country = event.target.countryName.value;
    const flag = event.target.countryFlag.value;
    const type = event.target.visaType.value;
    const time = event.target.processingTime.value;
    const fee = event.target.visaFee.value;
    const valid = event.target.validatiy.value;
    const applyMethod = event.target.applicationMethod.value;

    const updatedValue = {
      country,
      flag,
      type,
      time,
      fee,
      valid,
      applyMethod,
    };


    // update visa
    fetch(`https://server-one-ashen-40.vercel.app/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedValue),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })

    document.getElementById(`my_modal_${id}`).close();
  };

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
        fetch(`https://server-one-ashen-40.vercel.app/visaDetails/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const filtered = myVisas.filter((data) => data._id !== id);
            setMyVisas(filtered);
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
      {/* details */}
      <div>
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
              <p className="font-semibold text-[#034833]">
                {idx < 9 ? 0 : ""}
                {idx + 1}
              </p>
            </div>

            <h2 className="text-3xl mb-4 font-bold text-[#034833]">
              {countryName}
            </h2>
            <div className="space-y-1.5">
              <p className="text-[#185744]">
                <span className="font-semibold">Fee: </span>${visaFee}
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
            </div>
          </div>

          <div className="flex justify-between w-full">
            {/* update button */}
            <button
              onClick={() => {
                handleUpdateData(id);
                document.getElementById(`my_modal_${id}`).showModal();
              }}
              className="btn px-8 font-bold text-[#185744] bg-white hover:bg-[#45a735] hover:text-white transition-all duration-500 rounded-full"
            >
              Update
            </button>

            {/* delete button */}
            <button
              onClick={handleDelete}
              className="btn px-8 font-bold bg-[#dd3333] text-white hover:bg-[#be0202] hover:text-white transition-all duration-500 rounded-full"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* modal */}
      <dialog
        id={`my_modal_${id}`}
        className="modal modal-bottom sm:modal-middle "
      >
        <div className="modal-box pt-12 px-10 pb-16 sm:rounded-2xl rounded-none">
          <form onSubmit={handleModal}>
            <h2 className="text-3xl mb-4 font-bold">Update Visa</h2>
            <div className="space-y-5 mb-10">
              {/* country name */}
              <div className="form-control">
                <input
                  type="text"
                  name="countryName"
                  defaultValue={updateData?.countryName}
                  placeholder="Country Name"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* country flag */}
              <div className="form-control">
                <input
                  type="text"
                  name="countryFlag"
                  defaultValue={updateData?.countryFlag}
                  placeholder="Upload Country Flag"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* visa type */}
              <div className="form-control">
                <select
                  className="select select-bordered w-full text-base font-semibold"
                  required="required"
                  name="visaType"
                  defaultValue={updateData?.visaType}
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
              </div>

              {/* processing time */}
              <div className="form-control">
                <input
                  type="text"
                  name="processingTime"
                  defaultValue={updateData?.processingTime}
                  placeholder="Processing Time"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* visa fee */}
              <div className="form-control">
                <input
                  type="number"
                  name="visaFee"
                  defaultValue={updateData?.visaFee}
                  placeholder="Visa Fee (Only Number)"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* validatiy */}
              <div className="form-control">
                <input
                  type="text"
                  name="validatiy"
                  defaultValue={updateData?.validatiy}
                  placeholder="Validatiy"
                  className="input input-bordered w-full text-base font-semibold"
                  required
                />
              </div>

              {/* applicationMethod */}
              <div className="form-control">
                <select
                  className="select select-bordered w-full text-base font-semibold"
                  name="applicationMethod"
                  required="required"
                  defaultValue={updateData?.applicationMethod}
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
            </div>

            <button
              type="submit"
              className="btn  hover:bg-[#a7aa7b] text-lg font-semibold custom-effect2 w-full"
            >
              <span className="z-10">Update</span>
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default MyVisaDetails;
