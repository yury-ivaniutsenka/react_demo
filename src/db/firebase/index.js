import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDCriRYqoDoA6RkuhRvsr9EbA4J4BPtnHE",
	authDomain: "nano-learning.firebaseapp.com",
	databaseURL: "https://nano-learning.firebaseio.com",
	projectId: "nano-learning",
	storageBucket: "nano-learning.appspot.com",
	messagingSenderId: "906059891739"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.database();


export default firebaseApp;
