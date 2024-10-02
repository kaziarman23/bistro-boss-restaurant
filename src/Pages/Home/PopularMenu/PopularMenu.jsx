import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <div className="w-full h-auto my-5">
      <SectionTitle
        heading="our popular menu"
        subHeading="---Check it out---"
      />
      <div className="grid md:grid-cols-2 gap-4">
        {menu.map((item, index) => (
          <MenuItems key={index} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to="/ourMenu">
          <button className="uppercase rounded-xl p-2 border-b-2 border-black text-black hover:bg-black hover:text-white transition">
            view full menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
