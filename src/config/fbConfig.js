 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyDqibyYR5rFv-gNyngXSSNUuV2r8f0WaIM",
  authDomain: "fir-reactblog-phase2.firebaseapp.com",
  databaseURL: "https://fir-reactblog-phase2.firebaseio.com",
  projectId: "fir-reactblog-phase2",
  storageBucket: "fir-reactblog-phase2.appspot.com",
  messagingSenderId: "555578831638"
};
firebase.initializeApp(config);
// firebase.firestore().setting({ timestampsInSnapshots: true });

export default firebase;