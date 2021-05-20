import firebase from 'firebase'
import 'firebase/firestore'
const app = firebase.initializeApp({
    apiKey: "AIzaSyA2ey8EaI_v_nkcar6mwK1yvUVmNe2IZF4",
    authDomain: "bizz-customs.firebaseapp.com",
    databaseURL: "https://bizz-customs.firebaseio.com",
    projectId: "bizz-customs",
    storageBucket: "bizz-customs.appspot.com",
    messagingSenderId: "352379590080",
    appId: "1:352379590080:web:da670ca279d33b4f812425",
    measurementId: "G-HTE90PQ0WN"
});
export const getFirebase = () => app
export const getFireStore = () => firebase.firestore(app)