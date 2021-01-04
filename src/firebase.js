import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBOlWwryPV68KHJP5qItVV3xh_9F-d8rfA",
    authDomain: "facebook-clone-b30dc.firebaseapp.com",
    projectId: "facebook-clone-b30dc",
    storageBucket: "facebook-clone-b30dc.appspot.com",
    messagingSenderId: "417399957674",
    appId: "1:417399957674:web:37d894fc8d08a9e65dc8d3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;