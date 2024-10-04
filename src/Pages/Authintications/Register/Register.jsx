import { useContext } from "react";
import authinticationBg from "../../../assets/others/authentication.png";
import authintication from "../../../assets/others/authentication2.png";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updatingUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // creatinguser with email
    createUser(data.email, data.password)
      .then((result) => {
        console.log("new user info: ", result.user);
        updatingUser(data.name)
          .then(() => {
            reset();
            navigate("/");

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
              title: "Register successfull",
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log("register with email section has an error", error);
      });
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
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-5xl text-center font-bold">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                //   value={name}
                //   onChange={(e) => setName(e.target.value)}
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-center text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-center text-red-500">
                  email is required
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-center text-red-500">
                  password is required
                </span>
              )}
              {errors.password?.types === "minLength" && (
                <span className="text-center text-red-500">
                  password must be 6 characters
                </span>
              )}
              {errors.password?.types === "maxLength" && (
                <span className="text-center text-red-500">
                  password must max contain 20 characters
                </span>
              )}

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
    </>
  );
};

export default Register;
