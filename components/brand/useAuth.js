import { useState, useEffect } from 'react'
import {onAuthStateChanged} from '@firebase/auth'
import {auth} from 'libs/firebase'

function useAuth(){
    const [user, setUser] = useState(null)
    return user
}

export default useAuth