import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";
const Banner = () => {
  return (
    <Carousel infiniteLoop={true}>
      <div>
        <img src={img1} alt="banner img one" />
      </div>
      <div>
        <img src={img2} alt="banner img two" />
      </div>
      <div>
        <img src={img3} alt="banner img three" />
      </div>
      <div>
        <img src={img4} alt="banner img four" />
      </div>
      <div>
        <img src={img5} alt="banner img five" />
      </div>
      <div>
        <img src={img6} alt="banner img six" />
      </div>
    </Carousel>
  );
};

export default Banner;
