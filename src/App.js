import './App.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import config from './config/config';

import HomePage from './routes/homePage';

const app = initializeApp(config.firebase);
const analytics = getAnalytics(app);
const auth = getAuth();

onAuthStateChanged(auth, user => {
  if(!user) return;

  console.log(user.email);
});

function App() {
  const navigate = useNavigate();
  const authState = useSelector((state)=> state.auth.value);

  useEffect(() => {
    if(authState === false) navigate("/login"); 
  });

  return <HomePage authInstance={auth}/>;
}

export default App;
