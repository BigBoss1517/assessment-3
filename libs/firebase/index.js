import { initializeApp } from '@firebase/app'

import { getFirestore } from '@firebase/firestore'

 import { getAuth } from '@firebase/auth'

import firebaseConfig from './firebaseConfig'

import {signInWithEmailAndPassword} from '@firebase/auth'



const firebase = initializeApp(firebaseConfig)

const db = getFirestore();

 const auth = getAuth();

export {firebase, db, auth}

export default firebase

