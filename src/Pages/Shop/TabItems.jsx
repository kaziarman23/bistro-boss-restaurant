/* eslint-disable react/prop-types */

import UseFoodCard from "../Shared/FoodCard/UseFoodCard";

const TabItems = ({ item }) => {
  return (
    <div className="grid gap-5 my-10 md:grid-cols-2 lg:grid-cols-3">
      {item.map((item, index) => (
        <UseFoodCard key={index} item={item}></UseFoodCard>
      ))}
    </div>
  );
};

export default TabItems;
