import { createApp } from 'vue'
import './style.css'
import router from './routes';
import App from './App.vue'
import "@firebase/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBA9XNook9etePl5MJBPDbkgbIrtnlb5pc",
    authDomain: "training-6686e.firebaseapp.com",
    projectId: "training-6686e",
    storageBucket: "training-6686e.appspot.com",
    messagingSenderId: "785590995371",
    appId: "1:785590995371:web:297e6710da80d6fe32aaee"
};

//initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.mount('#app');
