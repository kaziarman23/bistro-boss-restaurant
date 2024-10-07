import axios from "axios";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  // sending tokens in the backend, because in localstorage we have to send the tokens. If we ware using https only then we did't had to send it to the backend, it had done it automatically. And we are using interceptors to do the headers part for every api call's

  axiosSecure.interceptors.request.use(
    function (config) {
      // Do something before request is sent because interceptor stop you to go forword
      const token = localStorage.getItem("access-token");
      // calling the token for varification
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Any status code that lie within the range of 2xx cause this function to trigger
  axios.interceptors.response.use(
    function (response) {
      // Do something with response data
      return response;
    },

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    async function (error) {
      const status = error.response.status;
      // console.log("some thing went wrong in inerceptors: ", status);

      // Do something with response error
      if (status === 401 || status === 403) {
        await loginUser();
        navigate("/login");
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
