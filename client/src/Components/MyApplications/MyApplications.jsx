import { useContext, useEffect, useState } from "react";
import PageTitle from "../AddVisa/PageTitle";
import ContextAPI from "../Auth/ContextAPI";
import ApplicationDetails from "./ApplicationDetails";

const MyApplications = () => {
  // useContext
  const { users, loading } = useContext(ContextAPI);
  const email = users?.email;

  // state for loadedData
  const [loadedData, setLoadedData] = useState(null);
  // state for search
  const [search, setSearch] = useState('');

  // useEffect for Data load
  useEffect(() => {
    fetch(`https://server-one-ashen-40.vercel.app/applications/${email}`)
      .then((res) => res.json())
      .then((data) => setLoadedData(data));
  }, [email]);

  
  // useEffect for search
  useEffect(() => {
    fetch(`https://server-one-ashen-40.vercel.app/search?searchQuery=${search}`)
      .then((res) => res.json())
      .then((data) => setLoadedData(data));
  }, [search])

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }


  return (
    <>
      <div className="bg-[#f9f9f9] pt-16 pb-36">
       
        <PageTitle
          heading1={"My"}
          heading2={"Applications"}
          subHeading={"My Applications"}
        ></PageTitle>

         {/* search bar */}
         <div className="sm:max-w-lg sm:px-24 px-4">
          <label className="input input-bordered flex items-center gap-2">
            <input onChange={(event) => setSearch(event.target.value)} type="text" className="grow" placeholder="Search by Country Name" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        <div className="flex flex-wrap justify-center gap-10 max-w-[90rem] mx-auto mt-20">
          {loadedData &&
            loadedData.map((application, idx) => (
              <ApplicationDetails
                key={application._id}
                application={application}
                loadedData={loadedData}
                setLoadedData={setLoadedData}
                idx={idx}
              ></ApplicationDetails>
            ))}
        </div>
      </div>
    </>
  );
};

export default MyApplications;
