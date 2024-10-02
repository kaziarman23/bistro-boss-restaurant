import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Recommendtation = () => {
  const [recommendMenu, setRecommendMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const offerdItems = data.filter((item) => item.category === "offered");
        setRecommendMenu(offerdItems);
      });
  }, []);
  return (
    <div className="w-full h-auto">
      <SectionTitle heading="chef recommends" subHeading="----Should Try----" />
      <div className="grid gap-5 my-10 md:grid-cols-2 lg:grid-cols-3">
        {recommendMenu.map((item, index) => (
          <div key={index} className="card w-96 shadow-xl">
            <figure>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body bg-[#f2f2f3] border-x-2">
              <h2 className="card-title justify-center">{item.name}</h2>
              <p>{item.recipe}</p>
              <div className="card-actions justify-center">
                <button className="bg-white  p-3 font-bold text-[#BB8506] rounded-lg border-b-2 border-[#BB8506] hover:bg-[#1F2937] hover:border-none">
                  Add To CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendtation;
