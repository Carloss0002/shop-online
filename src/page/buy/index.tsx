import { Button } from "../../components/button/button";
import { Header } from "../../components/Header/header";
import {MagnifyingGlass} from 'phosphor-react'
import { Products } from "../../Models/Products";
import { useSelector } from "react-redux";


export function BuyProduct(){
    const product:Products[] = useSelector((store:any)=>store.buy.BuyProducts) 

    let valorTotal:number = product.reduce(calcularValorTotal, 0)
    let freteCalculo:number = valorTotal * 0.05
    
    function calcularValorTotal(total:any, item:Products){
      return total + (item.price)
   }

    return(
        <div>
            <Header>
                <Button className="absolute w-[61px] h-[71px] text-sm flex justify-center items-center rounded-r-lg">
                  <MagnifyingGlass/>
                </Button>
            </Header>
            <section className="mt-5">
               <h1 className="font-open text-md ml-3 mb-8">Confirm your products</h1>
               <article className="flex justify-between">
                <div className="flex-col">

                  {
                   product.map(itens=>(
                    <div className="border flex mb-4 w-[664px] rounded-lg h-[206px] p-5" key={itens.id}>
                        <div className="w-[166px] max-h-[166px] overflow-hidden rounded-md border">
                           {
                             itens.images?.map(image=>(
                               <img src={image} alt={itens.title} className="w-full h-full"/>
                             ))
                           }
                        </div>
                        <div className="font-open self-center flex-1 text-sm text-center">
                          <p>{itens.title}</p>
                          <p>$ {itens.price}</p>
                        </div>
                    </div>
                  )) 
                  }
                </div>
                  <div className="border-2 w-[524px] rounded-lg font-open h-[445px]">
                    <div className="m-6 w">
                      <p className="font-ubuntu font-bold text-sm">Order Summary</p>

                      <div className="border-b border-gray-400">
                        <div className="flex justify-between text-sm mt-20">
                            <span>Item:</span>
                            <span>$ {valorTotal}</span>
                        </div>
                        <div className="flex justify-between text-sm mt-6 pb-2">
                            <span>Frete</span>
                            <span>$ {freteCalculo.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="text-red flex justify-between font-bold text-sm mt-16">
                        <p>Total order</p>
                        <span>$ {valorTotal + freteCalculo}</span>
                      </div>
                    </div>
                  </div>
               </article>
            </section>
        </div>
    )
}