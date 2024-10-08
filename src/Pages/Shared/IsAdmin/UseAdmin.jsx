import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
