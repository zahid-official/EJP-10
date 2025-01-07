import PageTitle from "../AddVisa/PageTitle";
import SignUp from "./SignUp";

const Register = () => {
  return (
    <div className="px-4 pt-16 pb-36 bg-[#f1f5eba4]">
      <PageTitle
        heading1={"Sign"}
        heading2={"Up"}
        subHeading={"Sign Up"}
      ></PageTitle>

      <SignUp></SignUp>
    </div>
  );
};

export default Register;
