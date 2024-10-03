import { useState } from "react";
import shopImg from "../../assets/shop/shopImg.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../Shared/UseMenu/UseMenu";
import TabItems from "./TabItems";
import { useParams } from "react-router";

const Shop = () => {
  const [menu] = UseMenu();
  const { category } = useParams();
  const categories = ["salad", "pizza", "dessert", "soup", "drink"];
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  // filtering items
  const drink = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div className="w-full h-auto">
      <Cover img={shopImg} title="Our Shop" />

      {/* tabs content */}
      <div className="my-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <TabItems item={salad}></TabItems>
          </TabPanel>
          <TabPanel>
            <TabItems item={pizza}></TabItems>
          </TabPanel>
          <TabPanel>
            <TabItems item={dessert}></TabItems>
          </TabPanel>
          <TabPanel>
            <TabItems item={soup}></TabItems>
          </TabPanel>
          <TabPanel>
            <TabItems item={drink}></TabItems>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
