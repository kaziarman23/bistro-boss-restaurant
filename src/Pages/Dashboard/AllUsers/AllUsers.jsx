import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Shared/AxiosSecure/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  //  tanStack Query
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // make admin
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want him to became an Admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Him!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "User Updated!",
              text: `${user.name} is now an Admin`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  // delete a user
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="">
      <SectionTitle heading="manage all users" subHeading="---How Many?---" />

      <div className="mt-10">
        <div className="overflow-x-auto">
          <h1 className="text-left text-2xl ml-5 mb-5 font-bold">
            Total Users: {users.length}
          </h1>
          {/* <h1>Total Price: ${totalPrice}</h1> */}
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>SL:</th>
                <th>User Image</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          {/* TODO: have to update the photo url. */}
                          {user?.image ? (
                            <img
                              src={user.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          ) : (
                            <div className="avatar">
                              <img
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprowrestlingnewshub.com%2Fwp-content%2Fuploads%2F2019%2F10%2FRandy-Orton.jpg&f=1&nofb=1&ipt=f9deb544e6fd3f67e27f10646a0fde4a9a705931027dd4b062473ff2827b40be&ipo=images"
                                alt="daisy ui avatar"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h1 className="font-bold text-xl">{user.name}</h1>
                  </td>
                  <td>{user.email}</td>
                  <th>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-base text-white bg-orgGold"
                      >
                        <FaUsers />
                      </button>
                    )}
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
