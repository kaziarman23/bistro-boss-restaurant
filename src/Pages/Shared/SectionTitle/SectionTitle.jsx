const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-1/3 mx-auto flex justify-center items-center gap-3 flex-col my-10">
      <p className="text-[#D99904]">{subHeading}</p>
      <h1 className="uppercase text-3xl font-bold text-black border-y-4 p-3">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
