 import { useRouter } from "next/dist/client/router";
 import {useAuth} from "libs/hooks/useAuth"
 import {signOut} from "@firebase/auth"
 import { auth } from "libs/firebase";
import { IoPersonCircleSharp } from "react-icons/io5";
import {LoginStatus} from './styles'



function UserLoginStatus({ size, color, status, ...props }) {
  const user = useAuth
  const router = useRouter()

  function handleClick(){
    signOut(auth)
    .then(()=>{
      router.push('/')
    })
  }
  return (
    <LoginStatus>
      <IoPersonCircleSharp size={size || "1.75rem"} />
      <figcaption>
        <p>Status</p>
        <p>please login</p>
      </figcaption>
    </LoginStatus>
  );
}

export default UserLoginStatus;
