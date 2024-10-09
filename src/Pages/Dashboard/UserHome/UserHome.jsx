import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <h1 className="3xl">
        <span>Hi, welcome </span>
        {user?.displayName ? user?.displayName : "back"}
      </h1>
    </div>
  );
};

export default UserHome;
