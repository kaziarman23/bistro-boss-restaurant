/* eslint-disable react/prop-types */
import { useContext } from "react";
import UseBorderBottomBtn from "../BoderBottomBtn/UseBorderBottomBtn";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const UseFoodCard = ({ item }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCart = (food) => {
    console.log(food, user.email);

    if (loading) {
      return (
        <div className="w-full h-screen flex justify-center items-center">
          <span className="loading loading-infinity loading-2xl"></span>
        </div>
      );
    }

    if (user && user.email) {
      const itemCarts = {
        menuId: item._id,
        email: user.email,
        name: item.name,
        image: item.image,
        price: item.price,
      };

      // sending oder in the backend
      axios
        .post("http://localhost:5000/carts", itemCarts)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${item.name} added to you'r cart`,
              showConfirmButton: false,
              timer: 2500,
            });
          }
        })
        .catch((error) => console.log(error));
    } else {
      Swal.fire({
        title: "Please Login",
        text: "You have to login for use this feature",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 shadow-xl">
      <figure>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${item.price}
      </p>
      <div className="card-body bg-[#f2f2f3] border-x-2">
        <h2 className="card-title justify-center">{item.name}</h2>
        <p>{item.recipe}</p>
        <div className="card-actions justify-center">
          <UseBorderBottomBtn
            onClick={() => handleCart(item)}
            borderBColor="border-[#BB8506]"
            textColor="text-[#BB8506]"
            hoverText="text-[#BB8506]"
          >
            Add To CART
          </UseBorderBottomBtn>
        </div>
      </div>
    </div>
  );
};

export default UseFoodCard;
