import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import UseMenu from "../../Shared/UseMenu/UseMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Shared/AxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = UseMenu();
  const axiosSecure = useAxiosSecure();

  // handling delete item
  const handleDelete = (id) => {
    console.log("get the id:", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `Item has been deleted`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="">
      {/* section title */}
      <SectionTitle heading="manage all items" subHeading="---Hurry up---" />

      {/* form content */}
      <div>
        <div className="mt-10">
          <div className="overflow-x-auto">
            <div className="text-left font-bold text-2xl p-2">
              <h1>Total Items: {menu.length}</h1>
            </div>
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>SL:</th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Item Price</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h1 className="font-bold text-xl">{item.name}</h1>
                    </td>
                    <td className="text-right">{item.price}</td>
                    <th>
                      <Link to={`/dashboard/updateItem/${item._id}`}>
                        <button className="btn btn-ghost btn-lg hover:text-blue-500 hover:bg-black">
                          <FaEdit />
                        </button>
                      </Link>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost btn-lg hover:text-red-500 hover:bg-black"
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
    </div>
  );
};

export default ManageItems;
