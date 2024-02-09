import { createApp } from 'vue'
import './style.css'
import router from './routes';
import App from './App.vue'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDW2m3NByCL3oGLVIyf9f2NxJTqmCNOBGA",
    authDomain: "stp-app-6fcc7.firebaseapp.com",
    projectId: "stp-app-6fcc7",
    storageBucket: "stp-app-6fcc7.appspot.com",
    messagingSenderId: "980064507607",
    appId: "1:980064507607:web:75dc6cb8d290070f048292",
    measurementId: "G-93MW89DRZ4"
};

initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.mount('#app');
