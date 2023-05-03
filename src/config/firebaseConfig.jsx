import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDlcpYLN25NcYBWIPqzw-T1CLxQ0WTFM7Y',
  authDomain: 'website-job-posting.firebaseapp.com',
  projectId: 'website-job-posting',
  storageBucket: 'website-job-posting.appspot.com',
  messagingSenderId: '1078484838127',
  appId: '1:1078484838127:web:07a72f0cb8992234fadd1a',
  measurementId: 'G-46266DZCXP',
}

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
export const auth = getAuth(app)
