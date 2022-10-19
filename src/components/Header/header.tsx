import { ReactNode } from "react"
import {Link} from 'react-router-dom'

export interface IPropsHome{
    children: ReactNode
}

export function Header({children}:IPropsHome){
    return(
        <header className="bg-gray-800 w-full h-[150px] rounded-b-lg flex justify-around items-center">
            <Link to='/' className="font-ubuntu text-gray-400 font-light leading-10 md:text-sm sm:text-xs">
               E-commerce
            </Link>
            {children}
            <div>
                <Link to='/SignIn' className="bg-gray-600 text-white md:w-36 font-ubuntu font-light text-xs py-3 px-4 rounded mr-7 sm:w-10">Sign In</Link> 
                <Link to='/SignUp'  className="bg-gray-900 text-white md:w-36 font-ubuntu font-light text-xs py-3 px-4 rounded sm:10">Sign Up</Link> 
            </div>
        </header>
    )
}