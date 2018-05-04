import firebase from 'firebase'
let config = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: ""
};


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();


export default db;