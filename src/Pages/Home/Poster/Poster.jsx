import poster from "../../../assets/home/chef-service.jpg";
const Poster = () => {
  return (
    <div className="w-full h-[400px] my-10 relative">
      <div className="w-full h-full ">
        <img
          src={poster}
          alt="poster img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-4/5 h-2/5 bg-white absolute top-[30%] left-[10%] p-3 rounded-xl">
        <h1 className="text-center text-4xl font-bold p-2">Bistro Boss</h1>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          esse expedita soluta numquam commodi repudiandae illum? Sunt amet
          reiciendis soluta itaque veniam eligendi explicabo, dignissimos iure
          repellendus. Repellendus, laudantium facere. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Illo accusantium cupiditate animi
          eius velit eaque quos. Id ipsa nihil ad maxime, aut ratione autem
          impedit dolores, assumenda eaque corporis sint?
        </p>
      </div>
    </div>
  );
};

export default Poster;
