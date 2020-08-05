importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js");

// The contents of firebaseConfig can be obtained from the firebase console.
var firebaseConfig = {
    apiKey: "AIzaSyBt1t_G6eMxcVR69crboLD5jbB-Xtx_GDo",
    authDomain: "pagii-3cd2b.firebaseapp.com",
    databaseURL: "https://pagii-3cd2b.firebaseio.com",
    projectId: "pagii-3cd2b",
    storageBucket: "pagii-3cd2b.appspot.com",
    messagingSenderId: "413386837261",
    appId: "1:413386837261:web:ab782fecf6c08bc0c3b444",
    measurementId: "G-QG0P98KWYJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();