/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import MenuItems from "../MenuItems/MenuItems";
import UseBorderBottomBtn from "../../Shared/BoderBottomBtn/UseBorderBottomBtn";
import Cover from "../Cover/Cover";

const UseMenuCetagory = ({ items, title, img }) => {
  return (
    <>
      <div className="w-full h-auto my-10">
        <div className="my-5">{title && <Cover img={img} title={title} />}</div>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <MenuItems key={index} item={item}></MenuItems>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link to="/menu">
            <UseBorderBottomBtn>ORDER YOUR FAVOURITE FOOD</UseBorderBottomBtn>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UseMenuCetagory;
