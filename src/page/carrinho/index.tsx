import { Header } from "../../components/Header/header";
import { Button } from '../../components/button/button'
import { MagnifyingGlass, ShoppingCart, Money } from "phosphor-react";
import {useDispatch, useSelector} from 'react-redux'
import { Products } from "../../Models/Products";
import {remove} from '../../store/reducers/cartElement'
import { useContext } from "react";
import { AuthContext } from "../../Context/user";
import { useNavigate } from "react-router-dom";


export function Carrinho(){
    const product:Products[] = useSelector((store:any)=> store.Cart.products) 
    const {pushBuyProducts} = useContext(AuthContext)
    const buyPage = useNavigate()

    console.log(product)
   
   const dispatch = useDispatch()
   
   let valorTotal = product.reduce(calcularValorTotal, 0)

   console.log(valorTotal)

   function excluir(id:number){
         dispatch(remove(id))
   }

   function calcularValorTotal(total:any, item:Products){
       return total + (item.price)
   }

   function redirectForBuy(products:any){
      pushBuyProducts(products)
      buyPage('/Buy')
   }

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
                        $ {valorTotal}
                    </span>
                 </div>
               </div>
                
                <article className="flex flex-col justify-center items-center mx-4 md:mt-20">
                  {
                    product.map(productsCart=>{
                      let {id, images, title, price} = productsCart
                      return(
                      <div className="border w-10/12 md:h-44 rounded-xl flex justify-between mt-3" key={id}>
                        <div className="m-4 md:w-36 md:max-h-36 overflow-hidden border rounded">
                           {
                              images?.map(image=><img className="h-full" src={image} alt={title} key={image}/>)
                           }
                        </div>
                        <div className="self-center font-open text-sm font-light text-center">
                          <p>{title}</p>
                          <span>$ {price}</span>
                        </div>
                        <div className="m-4 text-white w-28 border self-center rounded">
                            <Button className="w-full h-10 mb-4 rounded-md">
                              Buy
                            </Button>
                            <Button className="w-full h-10 rounded-md" onClick={()=>excluir(id)}>
                              Excluir
                            </Button>
                        </div>
                      </div>
                      )
                    })
                  }

                    <Button onClick={()=>redirectForBuy(product)} className="w-full h-9 mt-3 rounded hover:bg-gold-700">
                      buy all products
                    </Button>
                </article>
            </section>
        </div>
    )
}