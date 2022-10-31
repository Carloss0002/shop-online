import {Route, Routes} from 'react-router-dom'

import {SignIn} from '../page/SignIn/SignIn'
import {SignUp} from '../page/SignUp/SignUp'
import {Home} from '../page/Home/Home'
import {Details} from '../page/details/Details'
import { Categories } from '../page/categories/categories'
import {Carrinho} from '../page/carrinho'
import {BuyProduct} from '../page/buy'

export function Rotas(){
    return(
        <Routes>
            <Route path='/SignIn' element={<SignIn/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/Details/:id/:idCategory' element={<Details/>}/>
            <Route path='/Categories/:id/:Categories' element={<Categories/>}/>
            <Route path='/Carrinho' element={<Carrinho/>}/>
            <Route path="/Buy" element={<BuyProduct/>}/> 


            <Route path='*' element={<Home/>} />
        </Routes>
    )
}