// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOfbMadef4gRre1fYhmhyj3BqkPszYya0",
  authDomain: "guru-269310.firebaseapp.com",
  databaseURL: "https://guru-269310.firebaseio.com",
  projectId: "secure-guru-269310",
  storageBucket: "secure-guru-269310.appspot.com",
  messagingSenderId: "29308257744",
  appId: "1:29308257744:web:286aea87a7d3e18db425d5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase UI
export const firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

export const firestore = firebase.firestore();