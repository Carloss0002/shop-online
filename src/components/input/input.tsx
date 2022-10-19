import { InputHTMLAttributes, ReactNode } from "react";

export interface IRootProps{
    children: ReactNode,
    className?: string
}

function rootInput({children, className}:IRootProps){
     return(
        <div className={`md:w-[496px] sm:w-60 h-20  text-xs ${className}`}>
            {children}
        </div>
     )
}

export interface IInputComponent extends InputHTMLAttributes<HTMLInputElement>{

}

function InputComponent(props:IInputComponent){
    return(
        <input 
          className="w-full mb-1 border border-black mt-2 rounded h-[60px] pl-2 outline-none focus:border"
          {...props}
        />
    )
}

export const Input = {
    Root: rootInput,
    InputComponent: InputComponent,
}