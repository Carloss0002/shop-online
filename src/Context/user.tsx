import { createUserWithEmailAndPassword } from 'firebase/auth'
import {createContext, ReactNode} from 'react'
import {Auth} from '../Services/firebaseConnecting.js'

type signUpParams = {
    email: string,
    senha: string
}

const typeContext = {
    signIn: (email:string, senha:string)=>{}
}   

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext(typeContext)


export const AuthProvider = ({children}:AuthProviderProps)=>{
    
    async function signIn(email:string, senha:string){
        await createUserWithEmailAndPassword(Auth, email, senha)
    }

    return(
        <AuthContext.Provider
           value={{
             signIn
           }}
        >
          {children}
        </AuthContext.Provider>
    )
}

