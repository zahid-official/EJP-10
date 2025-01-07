import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContextAPI from "./ContextAPI";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  // useContext
  const { login, setUsers, google} = useContext(ContextAPI);
  // useLocation
  const location = useLocation();
  // useNavigate
  const navigate = useNavigate();

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // login
    login(email, password)
      .then((result) => {
        setUsers(result.user);
        toast.success("Sign In Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => toast.error(error.message));
  };

  // google
  const handleGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    google(googleProvider)
    .then(result => {
      setUsers(result.user);
      toast.success('Sign In Successfully');
      navigate(location?.state ? location.state : "/");
    })
    .catch((error) => toast.error(error.message))
  }

  return (
    <>
      <div className="card bg-white w-full max-w-xl mx-auto py-20 sm:px-12 px-6">
        <form onSubmit={handleSubmit}>
          <h2 className={"sm:text-[40px] text-3xl font-semibold mb-8"}>
            Sign In to your Account
          </h2>

          {/* input fields */}
          <div className="space-y-4">
            {/* email */}
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label font-semibold">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text-alt link link-hover pt-4">
                  Forgot password?
                </span>
              </label>
            </div>

            {/* submit */}
            <div className="form-control pt-6">
              <button className="btn hover:bg-[#45a735] mt-2 text-lg font-semibold custom-effect">
                <span className="z-10">Sign In</span>
              </button>

              {/* google sign in */}
              <div className="divider py-5">or sign In with Google</div>
              <button
                type="button"
                onClick={handleGoogle}
                className="btn hover:bg-[#1a394e] bg-[#254760] text-white text-lg font-bold h-14"
              >
                <FcGoogle size={30} />
                <span className="mt-1">Google Sign In</span>
              </button>
            </div>
          </div>
        </form>

        <p className="text-center mt-7">
          {`Don't have an account? `}
          <Link to={"/register"}>
            <span className="underline font-bold">Sign up</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
