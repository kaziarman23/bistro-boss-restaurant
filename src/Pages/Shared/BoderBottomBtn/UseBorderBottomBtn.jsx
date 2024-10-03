/* eslint-disable react/prop-types */


const UseBorderBottomBtn = ({
  children,
  borderBColor,
  textColor,
  hoverBg,
  hoverText,
}) => {
  return (
    <button
      className={`
        uppercase rounded-xl p-2 border-b-2 transition hover:border-none
        ${borderBColor ? borderBColor : "border-black"} 
        ${textColor ? textColor : "text-black"}
        ${hoverBg ? hoverBg : "hover:bg-black"}
        ${hoverText ? hoverText : "hover:text-white"}
        `}
    >
      {children}
    </button>
  );
};

export default UseBorderBottomBtn;
