import firebase from 'firebase/app'
import database from 'firebase/database'
import Rebase from 're-base'

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

export default Rebase.createClass(db)
