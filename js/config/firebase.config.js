var firebaseConfig = {
  apiKey: "AIzaSyAOint4D1gHdi0XXHOiN4P_T1GhO3fZlR0",
  authDomain: "fire-app-7d151.firebaseapp.com",
  databaseURL: "https://fire-app-7d151.firebaseio.com",
  projectId: "fire-app-7d151",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const func = firebase.functions();
