import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCnpt1eoRafs-aub-JAG-rGrf_lwMny0BU",
    authDomain: "slack-clone-e4cc6.firebaseapp.com",
    databaseURL: "https://slack-clone-e4cc6.firebaseio.com",
    projectId: "slack-clone-e4cc6",
    storageBucket: "slack-clone-e4cc6.appspot.com",
    messagingSenderId: "317432076650",
    appId: "1:317432076650:web:b1153293feb0bed8d12d13",
    measurementId: "G-0Z0WXH4TQT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;