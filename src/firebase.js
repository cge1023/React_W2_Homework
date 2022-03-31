import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCSxT8BUO-xCqO9K0mK50kFrbyjatrhpIo",
  authDomain: "react-w2-3ac18.firebaseapp.com",
  projectId: "react-w2-3ac18",
  storageBucket: "react-w2-3ac18.appspot.com",
  messagingSenderId: "134597145818",
  appId: "1:134597145818:web:33d9c0fba3bd2ead50e1e3",
  measurementId: "G-X2448QG31E"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

export { firestore };
