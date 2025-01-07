import { useContext, useEffect, useState } from "react";
import ContextAPI from "../Auth/ContextAPI";
import PageTitle from "../AddVisa/PageTitle";
import MyVisaDetails from "./MyVisaDetails";

const MyVisas = () => {
  // useContext
  const { users, loading } = useContext(ContextAPI);
  const email = users?.email;

  // state for myVisas
  const [myVisas, setMyVisas] = useState(null);

  // useEffect for Data load
  useEffect(() => {
    fetch(`https://server-one-ashen-40.vercel.app/visa/${email}`)
      .then((res) => res.json())
      .then((data) => setMyVisas(data));
  }, [email]);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <div className="pt-16 pb-36">
        <PageTitle
          heading1={"My"}
          heading2={"Visas"}
          subHeading={"My Visas"}
        ></PageTitle>

        <div className="flex flex-wrap justify-center gap-10 max-w-[90rem] mx-auto mt-20">
          {myVisas &&
            myVisas.map((visa, idx) => (
              <MyVisaDetails
                key={visa._id}
                visa={visa}
                myVisas={myVisas}
                setMyVisas={setMyVisas}
                idx={idx}
              ></MyVisaDetails>
            ))}
        </div>
      </div>
    </>
  );
};

export default MyVisas;
