import React from "react";
interface PropsButton {
  icon?: React.ReactNode;
  name: string;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  textColor?: string;
  hoverColor?:string
  bgColor?:string
}

const buttonStyle = {};
const CustomButton = ({
  icon,
  name,
  color = "hoverButton",
  width,
  height,
  fontSize = "17px",
  textColor,
  hoverColor,
  bgColor,
}: PropsButton) => {
  return (
    <button
      className={`rounded-3xl ${width}  ${color} ${textColor} ${hoverColor} ${bgColor} px-3 py-1 mt-1 mb-2 border shadow-md border-buttonBorder  `}
    >
      <span>{icon}</span>
      {name}
    </button>
  );
};

export default CustomButton;
