// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCpyZBmoBpq5aFM6jhJ9L2Jzsm5vgl5MUI",
    authDomain: "facebookclone-b52f1.firebaseapp.com",
    projectId: "facebookclone-b52f1",
    storageBucket: "facebookclone-b52f1.appspot.com",
    messagingSenderId: "340580211492",
    appId: "1:340580211492:web:1de752a4820c7a992b31b1",
    measurementId: "G-0VEPZ9KKWW"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  const provider =new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;