import axios from "axios";
import { Header } from "../../components/Header/header";
import {Input} from '../../components/input/input'
import { MagnifyingGlass} from 'phosphor-react'
import { useEffect, useState } from "react";
import {Categories} from '../../Models/categories'
import {Products} from '../../Models/Products'
import { useNavigate } from "react-router-dom";



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
            axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=2')
        ])
         
        const categoriesFiltered = categories.data.filter((element:any)=>{
            return element.name === 'Electronics' || element.name === 'Furniture' || element.name === 'Shoes' || element.name === 'Others' || element.name === 'Clothes'
        })
        
        setHome({categories: categoriesFiltered, products: products.data})
        
    }
    
    function redirectForCategories(id:any, name: string){
        Navigate(`/Categories/${id}/${name}`)
    }

    return(
        <div>
            <Header>
                <div className='w-[571px] relative'>
                <Input.InputComponent placeholder='Buscar Produtos'/>
                <div className='absolute h-[58px] bottom-1.5  rounded-r-sm w-14 right-0'>
                    <button className='bg-gold-900 w-14 h-full flex items-center justify-center m rounded-r-sm'>
                        <MagnifyingGlass className='text-white font-bold text-sm'/>
                    </button>
                </div> 
                </div>
            </Header>

            <section className="mt-9 flex p-8 justify-center flex-col items-center">
                <h1 className="font-sans text-sm text-center mx-1">Select a category</h1>

                <div className="border rounded md:mx-20 grid grid-flow-col grid-cols-3 border-black">
                    {
                        home.categories.map(categories=>(
                            <div key={categories.id} onClick={() => redirectForCategories(categories.id, categories.name)} className="first:row-span-2 first:col-span-1 p-4">
                                <div className="first:object-fill first:h-full">
                                  <img className="object-cover w-full h-full rounded-md"  src={categories.image} alt="" />
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
                          <div key={produtos.id} className="w-64 border p-4 border-gray-900 rounded m-5">
                             <div className="carousel-indicators absolute mb-3 flex justify-center w-56">
                                {
                                    produtos.images?.map(item=>( 
                                          <div key={item}>
                                              <img className="mr-4 w-full block" src={item} alt={produtos.title} />                        
                                          </div>
                                        
                                    ))
                                }
                             </div>
                             <div className="mt-24">
                                <h3 className="font-ubuntu text-center text-md pb-1">{produtos.title}</h3>
                               <p className="font-ubuntu text-md text-center">$ {produtos.price}</p>
                             </div>
                          </div>
                       ))
                    }
                 </article>
            </section>
        </div>
    )
}