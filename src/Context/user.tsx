import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import {createContext, ReactNode, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Auth} from '../Services/firebaseConnecting.js'

type userState = {
    userInfo: object
}

const typeContext = {
    signIn: (email:string, senha:string, name: string)=>{},
    signUp: (email:string, senha:string)=>{},
    SignOut: ()=>{},
    pushBuyProducts: (products:any)=>{},
    userInfo: {},
    loginUser: false,
    buyComponents: []
}   

type AuthProviderProps = {
    children: ReactNode
}

interface infoUser{
    userInfo: {},
    loginUser: boolean,
    buyComponents: []
}

export const AuthContext = createContext(typeContext)


export const AuthProvider = ({children}:AuthProviderProps)=>{
    
    const [info, setUserInfo] = useState<infoUser>({
       userInfo: {},
       loginUser: false,
       buyComponents: []
    })
 
    let {userInfo, loginUser, buyComponents} = info

    const redirect = useNavigate()
  
    useEffect(()=>{
        onAuthStateChanged(Auth, (user:any) =>{ 
            if(user !== null){
                setUserInfo({...info, userInfo: user , loginUser: true}) 
            } else{
                setUserInfo({...info, userInfo: {}, loginUser: false})
            }
        })
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
          setUserInfo({...info,userInfo: user.user, loginUser: true, })
       })
       .catch((err)=>{
            console.log(err)
       })
       .finally(()=>{
            redirect('/')
       })
    }

    function SignOut(){
         signOut(Auth).then(()=>{
            setUserInfo({...info, userInfo:{}, loginUser: false})
            alert('saiu')
            redirect('/')
         })
    }
    
    function pushBuyProducts(products:any){
       setUserInfo({...info, buyComponents: products})
    }

    return(
        <AuthContext.Provider
           value={{
             signIn,
             signUp,
             userInfo,
             loginUser,
             pushBuyProducts,
             buyComponents,
             SignOut
           }}
        >
          {children}
        </AuthContext.Provider>
    )
}

