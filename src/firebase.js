import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCAIVDWrFX2r6tGQDJZkDnVHIGBaeAn9i0",
  authDomain: "hogwartsblackmarket.firebaseapp.com",
  projectId: "hogwartsblackmarket",
  storageBucket: "hogwartsblackmarket.appspot.com",
  messagingSenderId: "1083858026267",
  appId: "1:1083858026267:web:d11bb93e6826a9bc84ddbe"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore, collection, getDocs };

