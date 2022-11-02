import Logo from "../../components/logo/logo";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { Text } from "../../components/Title/text";
import {Link} from 'react-router-dom'
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/user";

interface IState{
   email: string,
   name: string,
   senha: string,
   confirm: string,
   erro: boolean,
   confirmErr: boolean
}

export function SignIn(){
   
   const {signIn} = useContext(AuthContext)

   const [createAccount, setAccount] = useState<IState>({
         email: '',
         name: '',
         senha: '',
         confirm: '',
         erro: false,
         confirmErr: false
   })
   
   

   let {email, name, senha, confirm, erro, confirmErr} = createAccount

   function setFormData(e:any){
      e.preventDefault()

      if(email.length < 10 ||  name === '' || senha !== confirm){
         setAccount({...createAccount, erro: true})
      } else {
         setAccount({...createAccount, erro: false, confirmErr: false})
         console.log(createAccount)
      }

      return signIn(email, senha, name)
   }
   
   function setConfirm(e:any){
      
      setAccount({...createAccount, confirm:e})
     
   }

    return(
        <div className="flex flex-col justify-center items-center">
          <header className="mt-9">
            <Logo/>
          </header> 

           <div className="md:w-[544px] sm:w-72 border border-black rounded flex flex-col justify-center items-center mt-10">
              <h1 className="self-start mx-6 my-3 font-sans text-sm font-light">
                 Criar conta
              </h1>
              <form onSubmit={e=>setFormData(e)}>
                  <label htmlFor="nome">
                     <Text className="mx-5">
                         Seu Nome
                     </Text>
                     <Input.Root className="sm:mx-5">
                        <Input.InputComponent type="text" 
                              value={name} 
                              onChange={e=>setAccount({...createAccount, name:e.target.value})} 
                              placeholder="Nome e Sobrenome"
                              id="nome"
                              autoComplete="on"
                              autoFocus
                         />
                     </Input.Root>
                  </label>
                  <label htmlFor="e-mail">
                     <Text className="mx-5">
                         Seu email
                     </Text>
                     <Input.Root className="sm:mx-5">
                        <Input.InputComponent 
                              value={email} 
                              onChange={e=>setAccount({...createAccount ,email:e.target.value})}  
                              type="email" 
                              placeholder="Seu melhor email"
                              id="e-mail"
                              autoComplete="on"
                              required
                         />
                     </Input.Root>
                  </label>
                  <label htmlFor="senha">
                     <Text className="mx-5">
                         Uma Senha segura
                     </Text>
                     <Input.Root className="sm:mx-5">
                        <Input.InputComponent value={senha} 
                              onChange={e=>setAccount({...createAccount, senha: e.target.value})} 
                              type="password"
                              placeholder="Senha"
                              id="senha"
                         />
                     </Input.Root>
                  </label>
                  <label htmlFor="confirm">
                     <Text className="mx-5">
                         {
                            senha !== confirm ? (
                               <span className="text-error font-ubuntu">Senhas diferentes</span>
                            ):(
                               'Confirme sua Senha'
                            )
                         }
                     </Text>
                     <Input.Root className="sm:mx-5">
                        <Input.InputComponent type="password" 
                              placeholder="Confirme sua senha" 
                              value={confirm} 
                              onChange={e=>setConfirm(e.target.value)}
                              id="confirm"
                         />
                     </Input.Root>
                  </label>
                  {
                  erro &&
                  <p className="text-error font-sans mx-5">Verifique suas informações, algo está errado</p>
                  }
                  <Button type="submit" className="md:w-[496px] sm:w-full py-5 mb-5 mt-7 mx-5 px-5 rounded-md">
                     Enviar Dados
                  </Button>
              </form>
           </div>
           <Link to='/SignUp' className="font-ubuntu font-light text-sm mt-10 mb-11 leading-9 underline">
              Já tem uma Conta? Faça login
            </Link>
        </div>
    )
}