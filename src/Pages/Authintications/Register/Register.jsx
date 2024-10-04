import { useContext, useState } from "react";
import authinticationBg from "../../../assets/others/authentication.png";
import authintication from "../../../assets/others/authentication2.png";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // creatinguser with email
    createUser(email, password)
      .then((result) => {
        console.log("new user info: ", result.user);
      })
      .catch((error) => {
        console.log("register with email section has an error", error);
      });

    clearingInputs();
  };

  const clearingInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
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
          <h1 className="text-5xl text-center font-bold">Register</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>

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
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Register"
              className="btn text-white bg-[#D1A054]"
            />
          </div>
          <p className="text-[#D1A054] text-center my-2">
            Already have an Account? Please{" "}
            <span className="hover:text-blue-500">
              <Link to="/login">Login</Link>
            </span>
          </p>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              or register with
            </div>
            <div>{/* icons */}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
