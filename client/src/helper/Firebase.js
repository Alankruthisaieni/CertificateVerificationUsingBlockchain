
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH2Hh--a4xlmPvw1jdp-Px7ED-anY3Oo4",
  authDomain: "fir-auth1-281e5.firebaseapp.com",
  projectId: "fir-auth1-281e5",
  storageBucket: "fir-auth1-281e5.appspot.com",
  messagingSenderId: "107761602250",
  appId: "1:107761602250:web:ef1ff0e768f0df08dd2e33",
  measurementId: "G-DSTRBLN3E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth}
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);

