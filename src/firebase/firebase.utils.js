import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDYsn4FsDO8JtUY8lfJnZrDuyap6LmV4fE",
    authDomain: "react-course-1-b24a1.firebaseapp.com",
    projectId: "react-course-1-b24a1",
    storageBucket: "react-course-1-b24a1.appspot.com",
    messagingSenderId: "735612845888",
    appId: "1:735612845888:web:dbb4e10b8e2750a3d7c4a5"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
