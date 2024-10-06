import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import UseAxiosPublic from "../AxiosSecurePublic/UseAxiosPublic";
import { useNavigate } from "react-router";

const SocialLogin = () => {
  const { createUserWithGoogle } = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();

  
  // Google based register
  const handleGoogleRegister = () => {
    createUserWithGoogle()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          name: res.user?.displayName,
          email: res.user?.email,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className="divider"></div>
      <div className="flex gap-2 ">
        <button className="btn bg-blue-500 text-white">
          <FaFacebook />
          Facebook
        </button>
        <button
          onClick={handleGoogleRegister}
          className="btn bg-white text-black"
        >
          <FaGoogle />
          Google
        </button>
        <button className="btn bg-black text-white">
          <FaGithub />
          Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
