import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB-mJ8Ep2Vf7ilzH2MklbvYXKtPmgt3vbw",
    authDomain: "crown-clothing-c38f5.firebaseapp.com",
    databaseURL: "https://crown-clothing-c38f5.firebaseio.com",
    projectId: "crown-clothing-c38f5",
    storageBucket: "crown-clothing-c38f5.appspot.com",
    messagingSenderId: "1045594935689",
    appId: "1:1045594935689:web:053c0e76bc6bbff84f1158"
  };

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const {displayName , email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch(error){
            console.log('Error creating user' , error.message)
        }
    }

    return userRef
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
