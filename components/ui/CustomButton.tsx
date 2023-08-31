import React from 'react'
interface PropsButton {
    icon?: React.ReactNode;
    name: string;
    color?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    textColor?:string;

}

const buttonStyle = {

}
const CustomButton = ({ icon, name, color="", width, height, fontSize= "17px",textColor }: PropsButton) => {
    return (
        <button className='rounded-3xl px-3 py-1 mt-1 mb-2 border hover:bg-hoverButton hover:text-textHover shadow-md border-buttonBorder  '    style={{
            backgroundColor: color,
            width,
            height,
            fontSize,
            color:textColor
            
        }}> 
            <span>{icon}</span>{name}
        </button>
    )
}

export default CustomButton