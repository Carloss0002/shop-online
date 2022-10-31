import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Header } from "../../components/Header/header"
import { ProductsApi } from "../../Services/ProductsApi"
import {MagnifyingGlass} from 'phosphor-react'
import { Products } from "../../Models/Products"
import { CardELement } from "../../components/cards"
import { Button } from "../../components/button/button"

interface IStateCategories{
    categorias: Products[]
    search: string,
    err: boolean
}

export function Categories(){
    const {id,Categories} = useParams()
    const navigate = useNavigate()
    
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

    function redirectForDetail(id:number, idCategory:number){
        navigate(`/Details/${id}/${idCategory}`)
    }
   
    let {categorias, search} = state
    return(
        <div>
          <Header placeholder="Filtrar Elementos" value={search}>
              <Button className="absolute w-[61px] h-[71px] text-sm flex justify-center items-center rounded-r-lg">
                 <MagnifyingGlass/>
               </Button>
          </Header>

          <section className="">
             <h1 className="font-open font-thin text-sm text-center mx-5">{Categories}</h1>
              <article className="flex flex-wrap justify-center items-stretch">
                  {
                    categorias.map((item)=>{
                        const{id, images, title, price, category} = item
                         return(
                            <CardELement.cardBorder key={id} 
                                 className="w-64 border rounded-[10px] border-gray-900 p-4 m-5 hover:cursor-pointer"
                                 onClick={()=>redirectForDetail(id, category.id)}
                            > 
                                <div>
                                    {
                                        images?.map(i=>(
                                            <img className="rounded" src={i} alt={title} key={i}/>
                                        ))
                                    }
                                </div>
                                <CardELement.cardText title={title} price={price}/>
                                    
                             </CardELement.cardBorder>
                         )
                    })
                  }
              </article>
          </section>
        </div>
    )
}