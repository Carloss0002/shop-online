import { HtmlHTMLAttributes, ReactNode } from "react"

export interface CardDiv extends HtmlHTMLAttributes<HTMLDivElement>{
    children: ReactNode,
    className?: string
}

function CardBorder({children, className,...props}:CardDiv){
    return(
        <div className={`flex flex-col items-center justify-around w-[258px] mb-3 border border-black rounded-[10px] ${className}`} {...props}>
           {children}
        </div> 
    )
}

export interface CardText{
    title: string,
    price: number
}

function CardComponent({title, price}:CardText){
     return(
        <div className="pt-4">
            <p className="font-ubuntu text-center text-md pb-1 justify-self-center self-center">{title}</p>
            <p className="bg-gold-700 justify-self-end rounded-lg align-middle font-ubuntu text-center text-md mb-2 py-1">$ {price}</p>
        </div>
     )
}

export const CardELement = {
    cardBorder: CardBorder,
    cardText: CardComponent
}