import { MagnifyingGlass } from "phosphor-react";
import perfil from '../../Services/Imagens/user.svg'
import {Input} from '../../components/input/input'
import { Button } from "../../components/button/button";
import { Header } from "../../components/Header/header";
import {Auth} from '../../Services/firebaseConnecting'
import { useContext } from "react";
import { AuthContext } from "../../Context/user";
import { useState } from "react";
import {Users} from '../../Models/User'
import {  updatePhoneNumber, updateProfile } from "firebase/auth";

 

type ForStateProfile={
    userInfos: Users,
    name: string,
    number: number,
}

export function Profile(){
    const {userInfo, SignOut} = useContext(AuthContext)
    const [state, setState] = useState<ForStateProfile>({
        userInfos: userInfo as Users,
        name: '',
        number: 0,     
    })
    
    async function updateAuth(e:any){
        e.preventDefault()
        
        if(Auth.currentUser){
            await updateProfile((Auth.currentUser),{
                displayName: state.name
            })
        }
    }

    return(
        <div>
           <Header>
                <Button className="absolute w-[61px] h-[71px] text-sm flex justify-center items-center rounded-r-lg">
                     <MagnifyingGlass/>
                </Button>
           </Header>
           <section className="flex flex-col justify-center items-center">
              <div>
                <img className="bg-gray-400 bg-opacity-30 rounded-full" src={perfil} alt="sem foto" />
              </div>
              <div>
                    {
                        Object.keys(state.userInfos).length>1 &&
                        <form onSubmit={e=>updateAuth(e)}>
                            <Input.Root>
                                <Input.InputComponent 
                                    placeholder={state.userInfos.displayName} 
                                    value={state.name} 
                                    onChange={(e:any)=>setState({...state, name: e.target.value})}
                                />
                            </Input.Root>        
                            <Input.Root>
                                <Input.InputComponent 
                                   placeholder={state.userInfos.email} 
                                   disabled
                                />
                            </Input.Root>        
                            <Button type="submit" className="w-full py-2 rounded hover:bg-gold-700">
                                Salvar
                            </Button>
                        </form>
                    }
                    <Button onClick={()=>SignOut()} className="w-full mt-3 opacity-50 rounded bg-gray-400 hover:bg-gray-600">
                         sair
                    </Button>
              </div>
           </section>
        </div>
    )
}
