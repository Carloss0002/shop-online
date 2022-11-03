import { Header } from "../../components/Header/header";
import { Button } from '../../components/button/button'
import { MagnifyingGlass, ShoppingCart, Money } from "phosphor-react";
import {useSelector} from 'react-redux'

export function Carrinho(){
    const product = useSelector((store:any)=> store.Cart)  

    console.log(product)

    return(
        <div>
            <Header>
                <Button className="absolute w-[61px] h-[71px] text-sm flex justify-center items-center rounded-r-lg">
                  <MagnifyingGlass/>
                </Button>
            </Header>

            <section className="mt-7">
               <div className="flex justify-between mx-4">
                 <h1 className="font-open text-sm flex items-center">
                    Carrinho
                    <span className="pl-2">
                      <ShoppingCart/>
                    </span>
                 </h1>
                 
                 <div className="font-open font-light text-sm flex items-center">
                    <span>
                      <Money/>
                    </span>
                    <p className="pl-2">
                        Total:
                    </p>
                    <span className="pl-2">
                        $ 00,00
                    </span>
                 </div>
               </div>
                
                <article className="flex flex-col justify-center items-center mx-4 md:mt-20">
                    <div className="border w-10/12 md:h-44 rounded-xl flex justify-between">
                      <div className="m-4 md:w-36 md:h-36 border rounded">

                      </div>
                      <div className="self-center font-open text-sm font-light text-center">
                         <p>Fantastic Rubber Ball</p>
                         <span>$ 00,00</span>
                      </div>
                      <div className="m-4 text-white w-28 border self-center rounded">
                          <Button className="w-full h-10">
                            Buy
                          </Button>
                      </div>
                    </div>
                    <Button className="w-full h-9 mt-3 rounded hover:bg-gold-700">
                      buy all products
                    </Button>
                </article>
            </section>
        </div>
    )
}