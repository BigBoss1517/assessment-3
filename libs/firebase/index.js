import { initializeApp } from '@firebase/app'

import { getFirestore } from '@firebase/firestore'

 import { getAuth } from '@firebase/auth'

import firebaseConfig from './firebaseConfig'



const firebase = initializeApp(firebaseConfig)

const db = getFirestore();

 const auth = getAuth();

export {firebase, db, auth}

export default firebase

