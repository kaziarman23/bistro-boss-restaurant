import { FaTrashAlt } from "react-icons/fa";
import UseCart from "../../Shared/Cart/UseCart";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Shared/AxiosSecure/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = UseCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
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
      {/* section title */}
      <SectionTitle heading="wanna add more?" subHeading="---MY CART---" />

      {/* form content */}
      <div className="mt-10">
        <div className="overflow-x-auto">
          <div className="flex justify-evenly items-center font-bold text-2xl">
            <h1>Total Order: {cart.length}</h1>
            <h1>Total Price: ${totalPrice}</h1>
            {cart.length ? (
              <Link to="/dashboard/payment">
                <button className="px-4 py-2 rounded-xl bg-orgGold text-white">
                  Pay
                </button>
              </Link>
            ) : (
              <button
                disabled
                className="px-4 py-2 rounded-xl bg-orgGold text-white"
              >
                Pay
              </button>
            )}
          </div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL:</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
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
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
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

export default Cart;
