import { useContext, useEffect, useState } from "react";
import authinticationBg from "../../../assets/others/authentication.png";
import authintication from "../../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // login with email
    loginUser(email, password)
      .then((result) => {
        console.log("login user info: ", result.user);
        navigate(location.state?.form ? location.state?.form : "/");

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Logged in successfully",
        });
      })
      .catch((error) => {
        console.log("login with email has an error", error);
      });

    clearingInputs();
  };

  const handleCapchat = (e) => {
    const capchat = e.target.value;
    if (validateCaptcha(capchat)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const clearingInputs = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url("${authinticationBg}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full h-auto flex justify-center items-center gap-5 flex-col lg:flex-row shadow-2xl"
      >
        <div className="w-1/2 text-center lg:text-left">
          <img src={authintication} alt="login image" />
        </div>

        {/* form content */}
        <div className="card w-1/2 border shadow-2xl mr-4">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-5xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
                required
              />
              <label className="label">
                <p className="label-text-alt link link-hover">
                  Forgot password ?
                </p>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                placeholder="Type the text"
                onChange={handleCapchat}
                className="input input-bordered"
                // required
              />
            </div>
            <div className="form-control mt-6">
              <input
              // TODO : have to fix this capchat
                // disabled={disabled}
                type="submit"
                value="Login"
                className="btn text-white bg-[#D1A054]"
              />
            </div>
            <p className="text-[#D1A054] text-center my-2">
              Did&#39;t have an Account? Please{" "}
              <span className="hover:text-blue-500">
                <Link to="/register">Register</Link>
              </span>
            </p>
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center">
                or login with
              </div>
              <div>{/* icons */}</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
