import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    className?: string
}

export function Button({children, className,...props}:IButton){
    return(
        <button
          className={`bg-gold-900 text-white text-center font-sans font-bold ${className}`}
          {...props}
        >
            {children}
        </button>
    )
}