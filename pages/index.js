 import Button from "../components/ui/buttons/button.js"
 import firebase from "../firebase/index.js"

export default function Home() {
  return (
     <div>

       <Button>Login with Github</Button>

       <Button bgcolor ="#265aad" textcolor ="white">Login with Facebook</Button>

       <Button>Login with Apple</Button>

       <Button bgcolor="tomato" textcolor="white">Login with Google</Button>
        
         

     </div>
     
       
    
  )
}
