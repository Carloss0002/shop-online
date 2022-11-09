import { User } from "firebase/auth"
import { ShoppingCart } from "phosphor-react"
import { InputHTMLAttributes, ReactNode, useContext } from "react"
import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'
import { AuthContext } from "../../Context/user"
import { Auth } from "../../Services/firebaseConnecting"
import Logo from "../logo/logo"

export interface IPropsHome extends InputHTMLAttributes<HTMLInputElement>{
   children:ReactNode 
}

export function Header({children,...props}:IPropsHome){
    const {loginUser} = useContext(AuthContext)

    const productsLength:object[] = useSelector((store:any)=>store.Cart.products)
   
    return(
        <header className="bg-gray-800 w-full h-[150px] rounded-b-lg flex justify-around items-center">
            <Link to='/'>
                <Logo/>
            </Link>
            <div className="relative flex">
               
                    <input 
                        type="text" {...props} 
                        placeholder="Filtrar Elementos" 
                        className="w-[571px] h-[71px] rounded-xl text-start pl-3 font-open text-xs outline-none"
                    />
                
                <div className="absolute right-4">
                   {children}
                </div>
            </div>
            <div>
                {
                    loginUser ? (
                      <div className="flex">
                        <Link to='/cart' className="px-4 text-center text-white">
                            <span>{productsLength.length}</span>
                          <ShoppingCart size={40} color={'#fff'}/>
                        </Link>
                        <div className="text-center px-4 text-white">
                            <Link to='/Profile' className="font-ubuntu">
                                {`Olá, ${ Auth.currentUser?.displayName }`}
                                <br/><span className="font-bold">Conta</span>
                            </Link>
                        </div>
                      </div>  
                    ):(
                       <>
                        <Link to='/SignIn' className="bg-gray-600 text-white md:w-36 font-ubuntu font-light text-xs py-3 px-4 rounded mr-7 sm:w-10">Sign In</Link> 
                        <Link to='/SignUp'  className="bg-gray-900 text-white md:w-36 font-ubuntu font-light text-xs py-3 px-4 rounded sm:10">Sign Up</Link> 
                       </> 
                    )
                }
            </div>
        </header>
    )
}