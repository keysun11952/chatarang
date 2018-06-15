import firebase from 'firebase/app'
import Rebase from 're-base'
import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCbWl_jMWWkZQa8Bbr9xbehBxCpDvouWus",
    authDomain: "chatarang-3b460.firebaseapp.com",
    databaseURL: "https://chatarang-3b460.firebaseio.com",
    projectId: "chatarang-3b460",
    storageBucket: "chatarang-3b460.appspot.com",
    messagingSenderId: "135589323247"
};

const app = firebase.initializeApp(config)
const db = app.database()

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const auth = firebase.auth()

export default Rebase.createClass(db)
