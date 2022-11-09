import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Header } from "../../components/Header/header"
import { Input } from "../../components/input/input"
import {ArrowCircleLeft, MagnifyingGlass} from 'phosphor-react'
import { ProductsApi } from "../../Services/ProductsApi"
import { useEffect,  useRef,  useState } from "react"
import { Products } from "../../Models/Products"
import {Button} from '../../components/button/button'
import {CardELement} from '../../components/cards/index'
import { useDispatch } from "react-redux"
import { add } from "../../store/reducers/cartElement"



interface IStateForProduct{
    infoProduct: Products
    products: Products[]
    imgElement: string,
    search: string
}

export function Details(){
    let {id, idCategory} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const carouselWidth = useRef<HTMLDivElement>(null)
   
    
    let [product, setProduct] = useState<IStateForProduct>({
        infoProduct: {} as Products,
        products: [] as Products[],
        imgElement: '',
        search:'',
      
    })
    let {infoProduct, products, imgElement, search} =  product

    useEffect(()=>{
        getProdutForId()
    }, [id])
 
 

    async function getProdutForId(){
        const [singleProduct, products] = await Promise.all([
            ProductsApi.getCategoriesAndProductsForId(id).products,
            axios.get(`https://api.escuelajs.co/api/v1/categories/${idCategory}/products?offset=0&limit=10`)
        ])
        
        const firstImage = singleProduct.data.images[0]

        setProduct({...product ,infoProduct: singleProduct.data, products: products.data, imgElement: firstImage})
    }
    

    function imageValue(e:any){
        setProduct({...product, imgElement: e})
    }
    
    function reformeDetails(id:any, idCategory:number){
        navigate(`/Details/${id}/${idCategory}`)
         window.scrollTo(200, 200)
    }

    if(!products || !products.length || !infoProduct){
         navigate('/')
    }
    

    const handleLeft =(e:any)=>{
        e.preventDefault()
        
        console.log()
    }
    const handleRight = (e:any)=>{
        e.preventDefault()
    }
    
    const handleProduct = (product:any)=>{
        dispatch(add(product))
    }

    return(
        <div>
            <Header type='text' value={search} onChange={e=>setProduct({...product, search: e.target.value})}>
                <Button className="absolute w-[61px] h-[71px] text-sm flex justify-center items-center rounded-r-lg">
                     <MagnifyingGlass/>
                </Button>
            </Header>    

            <div className="mt-2 ml-4">
                <Link to='/' className="flex items-center ">
                    <ArrowCircleLeft/>
                    <span className="pl-2">Return Home</span>
                </Link>
            </div>

            <article className="mt-16 flex justify-center mx-10">
                <div>
                    {
                       Object.keys(infoProduct).length > 1 && 
                       <div className="flex justify-around flex-1">
                          <div>
                            <div className="w-[426px] h-[484px]  transition-all delay-100">
                                <img src={imgElement} className="rounded-[10px] w-full h-full object-cover" alt={infoProduct.title}/>
                            </div>
                            <div className="flex flex-shrink"> 
                                {
                                    infoProduct.images?.map(item=>{
                                        return(
                                           <div className="w-20 h-20 m-2" key={item}>
                                                <label htmlFor={item}  className="hover: cursor-pointer">
                                                    <img src={item} alt={infoProduct.title} className={`rounded  hover:border-gold-700 hover:border-2  ${imgElement === item? 'border-4 border-gold-900 rounded' : ""}`} />
                                                    <input 
                                                        type="radio" 
                                                        name="radio-img" 
                                                        value={item} 
                                                        onChange={e=> imageValue(e.target.value)} 
                                                        className='invisible'
                                                        id={item} 
                                                        checked={item === imgElement}
                                                    />
                                                </label>
                                           </div> 
                                        )
                                    })
                                }
                            </div>
                          </div>

                          <div className="mx-10">
                            <h1 className="font-ubuntu text-lg">{infoProduct.title}</h1>
                            <h2 className="font-ubuntu text-lg">Category: {infoProduct.category.name}</h2>
                            <h3 className="font-ubuntu text-lg w-[475px]">Price: ${infoProduct.price}</h3>

                            <p className="mt-10 font-open font-bold ">{infoProduct.description}</p>
                          </div>

                          <div className="border flex flex-col flex-grow justify-between right-1 rounded p-4 h-[380px] w-56">
                            <div>
                                <p className="font-open font-bold">{infoProduct.title}</p>
                                <p className="font-open font-semibold pt-2 text-md">Price: ${infoProduct.price}</p>
                            </div>
                            <div>
                                <Button className="rounded block w-full p-2 hover:bg-gold-700" onClick={()=>handleProduct(infoProduct)}>ADD TO CART</Button>
                                <Button className="rounded block w-full p-3 mt-3 bg-gold-700 hover:bg-gold-900">BUY</Button>
                                <p className="font-open font-extralight text-[10px] text-center">secure transaction</p>
                            </div>
                          </div>
                       </div>
                    }
                </div>            
            </article>
            <section className="flex flex-col items-center">
                 <h4 className="font-open self-start md:ml-4 text-sm my-2">Customers who viewed this item also viewed</h4>
                 <article className="flex items-center justify-center w-full md:max-w-5xl">
                     <div 
                           className="flex cursor-grab overflow-auto scroll-smooth" 
                           ref={carouselWidth}
                      >
                            {
                            
                                products.map((productsForCategory)=>{
                                    const {id, images, title, price, category} =productsForCategory
                                    return(
                                        <CardELement.cardBorder key={id} onClick={()=>reformeDetails(id, category.id)} className="mx-4  py-1 px-7">
                                            <div className=" mb-3  w-56 max-h-36 overflow-hidden">
                                                {
                                                images?.map(image=>(
                                                    <img src={image} key={image} alt={title} className="object-center"/>
                                                ))
                                                }  
                                            </div>
                                            <CardELement.cardText title={title} price={price}/>
                                        </CardELement.cardBorder>
                                    )
                                })
                            }
                     </div>
                 </article>
                     <div className="flex justify-around">
                        <Button className="mr-5" onClick={(e)=>handleLeft(e)}>
                            <p>left</p>
                        </Button>

                        <Button onClick={handleRight}>
                            <p>rgth</p>
                        </Button>
                     </div>
            </section>
        </div>
    )
}