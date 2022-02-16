import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV0BanKmcrhJFcpzuWNFZFVgS-e-gxIWo",

  authDomain: "vaulx-cross-projection.firebaseapp.com",

  databaseURL:
    "https://vaulx-cross-projection-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "vaulx-cross-projection",

  storageBucket: "vaulx-cross-projection.appspot.com",

  messagingSenderId: "20697979488",

  appId: "1:20697979488:web:62d659c768510e70a0c105",
};

//int firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
