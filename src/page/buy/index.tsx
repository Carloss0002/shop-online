import { Button } from "../../components/button/button";
import { Header } from "../../components/Header/header";
import {MagnifyingGlass} from 'phosphor-react'


export function BuyProduct(){
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
                  <div className="border flex  w-[664px] rounded-lg h-[206px] p-5">
                      <div className="w-[166px] h-[166px]  rounded-md border">

                      </div>
                      <div className="font-open self-center flex-1 text-sm text-center">
                         <p>Rustic Steel Salad</p>
                         <p>$ 00,00</p>
                      </div>
                  </div>
                  <div className="border-2 w-[524px] rounded-lg font-open">
                    <div className="m-6 w">
                      <p className="font-ubuntu font-bold text-sm">Order Summary</p>

                      <div className="border-b border-gray-400">
                        <div className="flex justify-between text-sm mt-20">
                            <span>Item:</span>
                            <span>$ 00,00</span>
                        </div>
                        <div className="flex justify-between text-sm mt-6 pb-2">
                            <span>Frete</span>
                            <span>$ 00,00</span>
                        </div>
                      </div>
                      <div className="text-red flex justify-between font-bold text-sm mt-16">
                        <p>Total order</p>
                        <span>$ 00,00</span>
                      </div>
                    </div>
                  </div>
               </article>
            </section>
        </div>
    )
}