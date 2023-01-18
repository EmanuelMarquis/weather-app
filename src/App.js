import './App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { logOut } from './reducers/authReducers';
import React, { useEffect } from 'react';
import config from './config/config';
import axios from "axios";

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
  const dispatch = useDispatch();

  useEffect(() => {
    if(authState === false) navigate("/login"); 
  });

  return (<>
    <div className="text-red-800 font-bold">
      <button onClick={async () => { await auth.signOut(); dispatch(logOut()); }}>Logout</button>
    </div>
  </>);
}

/**function getWeatherForecast() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition(async pos => resolve(await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${config.weatherApiKey}`)),
      error => reject(error)
    );}, 2000);
  });
} **/

export default App;
