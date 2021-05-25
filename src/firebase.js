import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDPjv_MySuCCvFQ4rzAatVpLGXiySmX-ic",
    authDomain: "pengwitter.firebaseapp.com",
    projectId: "pengwitter",
    storageBucket: "pengwitter.appspot.com",
    messagingSenderId: "678461799631",
    appId: "1:678461799631:web:9d38d42a8c6fb98c428bba"
  };

  export default firebase.initializeApp(firebaseConfig);