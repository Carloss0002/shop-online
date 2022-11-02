import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import {createContext, ReactNode, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Auth} from '../Services/firebaseConnecting.js'

type userState = {
    userInfo: object
}

const typeContext = {
    signIn: (email:string, senha:string, name: string)=>{},
    signUp: (email:string, senha:string)=>{},
    userInfo: {},
    loginUser: false,
}   

type AuthProviderProps = {
    children: ReactNode
}

interface infoUser{
    userInfo: {},
    loginUser: boolean,
}

export const AuthContext = createContext(typeContext)


export const AuthProvider = ({children}:AuthProviderProps)=>{
    
    const [info, setUserInfo] = useState<infoUser>({
       userInfo: {},
       loginUser: false,
       
    })
 
    let {userInfo, loginUser} = info

    const redirect = useNavigate()

    useEffect(()=>{
        onAuthStateChanged(Auth, (user:any) => setUserInfo({userInfo: user, loginUser: true}))
    }, [])
    
    async function signIn(email:string, senha:string, name:string){
        await createUserWithEmailAndPassword(Auth, email, senha)
        .then((auth)=>{
            updateProfile(auth.user,{
                displayName: name
            })
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            redirect('/')
        })
    }

    async function signUp(email:string, senha:string){
       await signInWithEmailAndPassword(Auth, email, senha)
       .then((user)=>{
         
          setUserInfo({userInfo: user.user, loginUser: true, })
       })
       .catch((err)=>{
        console.log(err)
       })
       .finally(()=>{
        redirect('/')
       })
    }


    return(
        <AuthContext.Provider
           value={{
             signIn,
             signUp,
             userInfo,
             loginUser,
           }}
        >
          {children}
        </AuthContext.Provider>
    )
}

