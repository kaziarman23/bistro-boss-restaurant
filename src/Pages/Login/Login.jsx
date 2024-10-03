import { useEffect, useState } from "react";
import authinticationBg from "../../assets/others/authentication.png";
import authintication from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [capchat, setCapchat] = useState("");

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { email, password };
    console.log(details);
    clearingInputs();
  };

  const handleCapchat = () => {
    console.log(capchat);
    if (validateCaptcha(capchat)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const clearingInputs = () => {
    setEmail("");
    setPassword("");
    setCapchat("");
  };

  return (
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
              value={capchat}
              onChange={(e) => setCapchat(e.target.value)}
              className="input input-bordered"
              required
            />
            <button onClick={handleCapchat} className="btn mt-2 btn-outline">
              Validate
            </button>
          </div>
          <div className="form-control mt-6">
            <input
              disabled={disabled}
              type="submit"
              value="Login"
              className="btn text-white bg-[#D1A054]"
            />
          </div>
          <p className="text-[#D1A054] text-center my-2">
            Did&#39;t have an Account? Please{" "}
            <span className="hover:text-blue-500">Register</span>
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
  );
};

export default Login;

