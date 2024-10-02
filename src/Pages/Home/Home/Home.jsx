import Banner from "../Banner/Banner";
import Cetagorys from "../Cetagorys/Cetagorys";
import ContactPoster from "../ContactPoster/ContactPoster";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Poster from "../Poster/Poster";
import Recommendtation from "../Recommendtation/Recommendtation";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Cetagorys />
      <Poster />
      <PopularMenu />
      <ContactPoster />
      <Recommendtation />
      <Featured />
      <Reviews />
    </div>
  );
};

export default Home;
