import clsx from 'clsx'
import { ReactNode } from "react";

export interface IText{
    children: ReactNode,
    size?: 'sm'| 'md' | 'lg',
    className?: string 
}

export function Text({children, size, className}:IText){
      return(
        <span className={
            clsx(
                'inline',
                {
                    
                },
                className
            )
        }>
           {children}
        </span>
      )
}