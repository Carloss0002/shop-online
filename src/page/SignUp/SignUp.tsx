import Logo from "../../components/logo/logo";
import {Input} from '../../components/input/input'
import {Button} from '../../components/button/button'
import {Link} from 'react-router-dom'
import { useState } from "react";

interface IState{
    email: string,
    senha: string
}

export function SignUp(){
    
    const [login, setLogin] = useState<IState>({
        email: '',
        senha: ''
    })

    function loginData(e:any){
        e.preventDefault()
    }

    return(
        <div className="flex flex-col justify-center items-center">
           <header className="mb-12 mt-28">
              <Logo/>
           </header> 

           <div className="border border-black rounded md:w-[544px] sm:w-auto flex flex-col justify-center items-center"> 
             <h1 className="font-sans self-start mx-6 my-7 font-light text-sm leading-10">
                Fazer Login
             </h1>
             <form onSubmit={e=>loginData(e)}>
                 <label htmlFor="email" className="px-5">
                    Email
                    <Input.Root className="mx-5">
                       <Input.InputComponent 
                                value={login.email} 
                                onChange={e=>setLogin({...login, email: e.target.value})} 
                                placeholder="Seu Email para login"
                                id="email"
                                autoComplete="on"
                                autoFocus
                                required
                        />
                    </Input.Root>
                 </label>
                 <label htmlFor="senha">
                    Senha
                    <Input.Root className="mx-5">
                       <Input.InputComponent 
                                value={login.senha} 
                                onChange={e=>setLogin({...login, senha: e.target.value })} 
                                type='password' 
                                placeholder="Sua Senha"
                                id="senha"
                        />
                    </Input.Root>
                 </label>
                 <Button type="submit" className="md:w-[496px]  font-bold text-xs sm:w-96 border py-5 mb-5 mt-7 mx-5 px-5 rounded-md">
                     Enviar Dados
                  </Button>   
             </form>
           </div>
            <Link to='/SignIn' className="font-ubuntu font-light text-sm leading-9 mt-12 underline hover:text-gray-400 sm:text-center">
                Ainda não tem uma Conta? Crie uma agora
            </Link>
        </div>
    )
}