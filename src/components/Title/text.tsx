import { ReactNode } from "react";

export interface IText{
    children: ReactNode,
    className?: string 
}

export function Text({children,  className}:IText){
      return(
        <span className={
                className
        }>
           {children}
        </span>
      )
}