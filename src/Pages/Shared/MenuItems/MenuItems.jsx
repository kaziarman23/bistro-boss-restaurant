/* eslint-disable react/prop-types */

const MenuItems = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex space-x-4 my-5">
      <img
        src={image}
        alt={name}
        className="w-[120px] rounded-tr-[50%] rounded-bl-[50%] rounded-br-[50%]"
      />
      <div>
        <h3 className="uppercase">{name} ------------</h3>
        <p className="text-sm">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItems;
