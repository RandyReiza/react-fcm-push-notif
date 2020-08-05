import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

function App() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
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
  messaging.requestPermission()
    .then(function() {
      console.log('Have permission');
    })
    .catch(function(err) {
      console.log('Error', err);
    });  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
