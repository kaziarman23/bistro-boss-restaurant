import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import { Link } from "react-router-dom";
import UseMenu from "../../Shared/UseMenu/UseMenu";
import UseBorderBottomBtn from "../../Shared/BoderBottomBtn/UseBorderBottomBtn";

const PopularMenu = () => {
  const [menu] = UseMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <div className="w-full h-auto my-5">
      <SectionTitle
        heading="our popular menu"
        subHeading="---Check it out---"
      />
      <div className="grid md:grid-cols-2 gap-4">
        {popularItems.map((item, index) => (
          <MenuItems key={index} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to="/menu">
          <UseBorderBottomBtn>view full menu</UseBorderBottomBtn>
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
