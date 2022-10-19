import {Route, Routes} from 'react-router-dom'

import {SignIn} from '../page/SignIn/SignIn'
import {SignUp} from '../page/SignUp/SignUp'
import {Home} from '../page/Home/Home'
import {Details} from '../page/details/Details'
import { Categories } from '../page/categories/categories'

export function Rotas(){
    return(
        <Routes>
            <Route path='/SignIn' element={<SignIn/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/Details/:id' element={<Details/>}/>
            <Route path='/Categories/:id/:Categories' element={<Categories/>}/>
        </Routes>
    )
}