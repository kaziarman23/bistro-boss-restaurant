import axios from "axios";

const UseAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: "https://bistro-boss-restaurant-server-beta-lac.vercel.app",
  });

  return axiosPublic;
};

export default UseAxiosPublic;
