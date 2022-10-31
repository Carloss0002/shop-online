import axios from "axios";

import { Header } from "../../components/Header/header";
import { MagnifyingGlass} from 'phosphor-react'
import { useEffect, useState } from "react";
import {Categories} from '../../Models/categories'
import {Products} from '../../Models/Products'
import { useNavigate } from "react-router-dom";
import {CardELement} from '../../components/cards/index'
import { Button } from "../../components/button/button";


interface IStateForHome{
     categories: Categories[],
     products: Products[]
}

export function Home(){
    const [home, setHome] = useState<IStateForHome>({
        categories: [] as Categories[],
        products: [] as Products[]
    })
    
    const Navigate = useNavigate()

    useEffect(()=>{
       loadApi()
    },[])
    
    async function loadApi() {

        const [categories, products] = await Promise.all([
            axios.get('https://api.escuelajs.co/api/v1/categories'),
            axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=50')
        ])
         
        const categoriesFiltered = categories.data.filter((element:any)=>{
            return element.id === 1 ||element.id === 2 ||element.id === 3 ||element.id === 4 || element.id === 5 
        })
        
        setHome({categories: categoriesFiltered, products: products.data})
    }
    
    function redirectForCategories(id:any, name: string){
        Navigate(`/Categories/${id}/${name}`)
    }

    function redirectForDetails(id:number, idCategory:number){
         Navigate(`/Details/${id}/${idCategory}`)
    } 

    return(
        <div>
            <Header >
               <Button className="absolute w-[61px] h-[71px] text-sm flex justify-center items-center rounded-r-lg">
                 <MagnifyingGlass/>
               </Button>
            </Header>
            <section className="mt-9 flex p-8 justify-center flex-col items-center">
                <h1 className="font-open text-sm text-center mx-1">Select a category</h1>

                <div className="border rounded md:mx-20 grid grid-flow-col grid-cols-3 border-black">
                    {
                        home.categories.map(categories=>(
                            <div key={categories.id} 
                                onClick={() => redirectForCategories(categories.id, categories.name)} 
                                className="first:row-span-2 first:col-span-1 p-4 hover:cursor-pointer relative"
                            >

                                <div className="first:object-fill first:h-full">
                                  <img className="object-cover w-full h-full rounded-md"  src={categories.image} alt={categories.name} />
                                </div>
                                <div className="absolute top-3 ml-2">
                                    <p className="font-ubuntu mt-2 text-sm text-white bg-gray-400 bg-opacity-40 rounded px-2">{categories.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section>
                 <h2>Produtos para todos os gostos</h2>

                 

                 <article className="flex justify-around flex-wrap">
                    {
                       home.products.map(produtos=>
                        (
                          <CardELement.cardBorder key={produtos.id} onClick={()=>redirectForDetails(produtos.id, produtos.category.id)} className="w-64 border p-4 border-gray-900 rounded m-5 hover:cursor-pointer">
                             <div className=" mb-3 flex justify-center w-56">
                                {
                                    produtos.images?.map(item=>( 
                                          <div key={item}>
                                              <img className="mr-4 w-full block" src={item} alt={produtos.title} />                        
                                          </div>
                                        
                                    ))
                                }
                             </div>
                             <CardELement.cardText title={produtos.title} price={produtos.price}/>
                          </CardELement.cardBorder>
                       ))
                    }
                 </article>
            </section>
        </div>
    )
}