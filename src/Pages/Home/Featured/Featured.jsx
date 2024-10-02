import UseBorderBottomBtn from "../../Shared/BoderBottomBtn/UseBorderBottomBtn";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <div
      className="w-full h-[600px] relative my-5 z-0 bg-fixed"
      style={{
        backgroundImage: `url("/src/assets/home/featured.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full absolute top-0 left-0 opacity-50 bg-black z-0"></div>

      {/* content div */}
      <div className="mt-5 overflow-hidden">
        <div className="relative z-10">
          <SectionTitle
            heading="from our menu"
            headingTextColor="text-white"
            subHeading="---Check it out---"
          />
        </div>

        <div className="flex justify-center items-center gap-5 relative z-10">
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="/src/assets/home/featured.jpg"
              alt="featured img"
              className="w-4/5 object-cover"
            />
          </div>
          <div className="w-1/2 text-white space-y-3">
            <h1 className="font-bold text-xl">March 20, 2023</h1>
            <h3 className="font-bold text-xl">WHERE CAN I GET SOME?</h3>
            <p className="mr-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <UseBorderBottomBtn
              textColor="text-white"
              borderBColor="border-white"
            >
              Order Now
            </UseBorderBottomBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
