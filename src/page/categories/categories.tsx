import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header/header"
import { ProductsApi } from "../../Services/ProductsApi"
import {Input} from '../../components/input/input'
import {MagnifyingGlass} from 'phosphor-react'
import { Products } from "../../Models/Products"

interface IStateCategories{
    categorias: Products[]
    search: string,
    err: boolean
}

export function Categories(){
    const {id,Categories} = useParams()
    
    let [state, setState] = useState<IStateCategories>({
         categorias: [] as Products[],
         search: '',
         err: false
    })

    useEffect(()=>{
        loadFilteredCategories()
    },[])

    function loadFilteredCategories(){
       ProductsApi.getCategoriesAndProductsForId(id).category
       .then((response)=>{
           setState({...state, categorias: response.data})
       })
       .catch((err)=>{
            console.log(err.message)
       })
    }
   
    let {categorias, search} = state
    return(
        <div>
          <Header>
            <div className='w-[571px] relative'>
                <Input.InputComponent value={search} onChange={e=>setState({...state ,search: e.target.value})} placeholder='Buscar Produtos'/>
                    <div className='absolute h-[58px] bottom-1.5  rounded-r-sm w-14 right-0'>
                    <button className='bg-gold-900 w-14 h-full flex items-center justify-center m rounded-r-sm'>
                        <MagnifyingGlass className='text-white font-bold text-sm'/>
                   </button>
                </div> 
            </div>
          </Header>

          <section className="">
             <h1 className="font-sans font-thin text-sm text-center mx-5">{Categories}</h1>
              <article className="flex flex-wrap justify-center items-stretch">
                  {
                    categorias.map((item)=>{
                        const{id, images, title, price} = item
                         return(
                            <div key={id} className="w-64 border rounded-[10px] border-gray-900 p-4 m-5"> 
                                <div>
                                    {
                                        images?.map(i=>(
                                            <img className="rounded" src={i} alt={title} />
                                        ))
                                    }
                                </div>
                                <div className="text-center">
                                    <h3 className="font-ubuntu text-md font-light pb-1">{title}</h3>
                                     <p className="font-ubuntu text-md font-light">$ {price}</p>
                                </div>
                             </div>
                         )
                    })
                  }
              </article>
          </section>
        </div>
    )
}