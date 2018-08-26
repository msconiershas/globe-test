import firebase from 'firebase'

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyAEml0rlI7m8j0aAw9iNoq7g1sSm1eVVJw",
    authDomain: "travel-quiz-project.firebaseapp.com",
    databaseURL: "https://travel-quiz-project.firebaseio.com",
    projectId: "travel-quiz-project",
    storageBucket: "travel-quiz-project.appspot.com",
    messagingSenderId: "241227398718"
  };
  const fire = firebase.initializeApp(config);

export default fire;
