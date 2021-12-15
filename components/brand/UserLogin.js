import { signInWithEmailAndPassword } from '@firebase/auth'
import TextInput from "ui/forms/TextInput"
import { auth } from 'libs/firebase'
 import { Button } from "ui/buttons"
import Login from "./styled"
import { useState } from 'react'
 
 
function UserLogin ({...props}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    async function handleClick(e) {
        e.preventDefault();
       const isUser = await signInWithEmailAndPassword(auth, "jim@home.com", "123456")
        
    }
   
    return (
        <>
        <Login {...props} onClick={handleClick}>    
         <TextInput label="Email"  onChange={(e)=> setEmail(e.currentTarget.value)} id="emailAddress" placeholder="janedoe@home.com" {...props}/>
         <TextInput label="Password" onChange={(e)=> setPassword(e.currentTarget.value)} type="password" id="emailAddress" placeholder="use a secure password" {...props}/>
    
        <Button bgcolor="#ed4747" color="white" noBoxShadow {...props} type="submit">LOGIN</Button>
        </Login>
        </>

    )
}

export default UserLogin