/* eslint-disable react/prop-types */
import UseBorderBottomBtn from "../BoderBottomBtn/UseBorderBottomBtn";

const UseFoodCard = ({ item }) => {
  return (
    <div className="card w-96 shadow-xl">
      <figure>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${item.price}</p>
      <div className="card-body bg-[#f2f2f3] border-x-2">
        <h2 className="card-title justify-center">{item.name}</h2>
        <p>{item.recipe}</p>
        <div className="card-actions justify-center">
          <UseBorderBottomBtn
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
