import * as firebase from 'firebase';

var config = {
      apiKey: "AIzaSyAJeBPudRA6SBRUVu7-Ez5Wn6fFeqUFpyk",
      authDomain: "perligo-8c239.firebaseapp.com",
      databaseURL: "https://perligo-8c239.firebaseio.com",
      projectId: "perligo-8c239",
      storageBucket: "perligo-8c239.appspot.com",
      messagingSenderId: "937234227011",
      appId: "1:937234227011:web:c30d3765a50f67fd3719f6"  
};

firebase.initializeApp(config);

const database = firebase.database();

export {database};