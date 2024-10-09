import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Shared/AxiosSecure/useAxiosSecure";
import { FaDollarSign } from "react-icons/fa";
import { FaPlateWheat, FaTruck, FaUser } from "react-icons/fa6";

const AdminHome = () => {
  // context api
  const { user } = useContext(AuthContext);

  // Hooks
  const axiosSecure = useAxiosSecure();

  // TanStack query
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminStats");
      return res.data;
    },
  });

  return (
    <div className="w-4/5 mx-auto space-y-5">
      {/* heading component */}
      <h1 className="text-3xl p-3 font-bold">
        <span>Hi, welcome </span>
        {user?.displayName ? user?.displayName : "back"}
      </h1>
      <h1 className="text-3xl p-3 font-bold">This is you&#39;r Stats</h1>
      {/* stats content */}
      <div className="stats shadow">
        <div className="stat bg-purple-600">
          <div className="stat-figure text-black">
            <FaDollarSign className="text-3xl" />
          </div>
          <div className="stat-title">
            <h1 className="font-bold">Revenue</h1>
          </div>
          <div className="stat-value">{stats.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat bg-blue-600">
          <div className="stat-figure text-black">
            <FaUser className="text-3xl" />
          </div>
          <div className="stat-title font-bold">
            <h1 className="font-bold">New Users</h1>
          </div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat bg-pink-600">
          <div className="stat-figure text-black">
            <FaPlateWheat className="text-3xl" />
          </div>
          <div className="stat-title font-bold">Menu Items</div>
          <div className="stat-value">{stats.menuItems}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat bg-amber-500">
          <div className="stat-figure text-black">
            <FaTruck className="text-3xl" />
          </div>
          <div className="stat-title">orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
