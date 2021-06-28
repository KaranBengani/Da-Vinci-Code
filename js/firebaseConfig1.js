// require("dotenv/config");
const env = require("dotenv");
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: env.process.env.API_KEY,
  authDomain: "da-vinci-code-auth.firebaseapp.com",
  projectId: "da-vinci-code-auth",
  storageBucket: "da-vinci-code-auth.appspot.com",
  messagingSenderId: "931364964224",
  appId: "1:931364964224:web:2ae6add01fefb2eed52365",
  measurementId: "G-5KBELPGLNW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//firestore references
const db = firebase.firestore();

//update settings
db.settings({ timestampsInSnapshots: true });
