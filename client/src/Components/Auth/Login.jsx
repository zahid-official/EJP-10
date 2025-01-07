import PageTitle from "../AddVisa/PageTitle";
import SignIn from "./SignIn";

const Login = () => {
  return (
    <div className="px-4 pt-16 pb-36 bg-[#f1f5eba4]">
      <PageTitle
        heading1={"Sign"}
        heading2={"In"}
        subHeading={"Sign In"}
      ></PageTitle>

      <SignIn></SignIn>
    </div>
  );
};

export default Login;
