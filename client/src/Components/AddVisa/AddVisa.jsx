import PageTitle from "./PageTitle";
import VisaInfo from "./VisaInfo";

const AddVisa = () => {
  return (
    <div className="pt-16 pb-36">
      <PageTitle
        heading1={"Add"}
        heading2={"Visa"}
        subHeading={"Add Visa"}
      ></PageTitle>

      <VisaInfo></VisaInfo>
    </div>
  );
};

export default AddVisa;
