import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import menu1 from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import UseMenu from "../Shared/UseMenu/UseMenu";
import UseMenuCetagory from "../Shared/MenuCetagory/UseMenuCetagory";

const Menu = () => {
  const [menu] = UseMenu();
  const offerdItems = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={menu1} title="Our Menu" />
      <SectionTitle heading="Today's offer" subHeading="---Don't miss---" />
      <UseMenuCetagory items={offerdItems} />

      {/* dessert items */}
      <UseMenuCetagory items={dessert} title="Dessert" img={dessertImg} />
      {/* pizza items */}
      <UseMenuCetagory items={pizza} title="Pizza" img={pizzaImg} />
      {/* dessert items */}
      <UseMenuCetagory items={salad} title="Salad" img={saladImg} />
      {/* dessert items */}
      <UseMenuCetagory items={soup} title="Soup" img={soupImg} />
    </>
  );
};

export default Menu;
