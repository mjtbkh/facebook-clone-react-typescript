import React from 'react'

export enum ButtonTypes {
    primary = 'bg-blue-500 text-2xl',
    secondary = 'bg-green-500 font-bold'
}
interface ButtonProps {
    type: ButtonTypes.primary | ButtonTypes.secondary,
    text: string
}
const Button:React.FC<ButtonProps> = (props: ButtonProps) => {
    return(
        <>
            <button type="submit" className={`w-full rounded-lg text-white my-4 p-3 mx-auto flex justify-center cursor-pointer ${props.type}`}>{props.text}</button>
        </>
    )
}

export default Button