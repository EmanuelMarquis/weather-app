import { logOut } from '../reducers/authReducers';
import { useDispatch } from "react-redux";
import config from '../config/config';
import axios from "axios";
import Icons from '../components/icons';
import { useEffect, useState } from 'react';

export default function HomePage({authInstance}) {
  const dispatch = useDispatch();
  const [forecastData, setForecastData] = useState();
  
  useEffect(() => {
    reqWeatherForecast(setForecastData);
  }, []);

  return (<div className='container min-h-screen justify-center'>
    <nav>
      <Icons icon="menu" width={32} height={32}/>
    </nav>
    <ForecastDisplayer forecastData={forecastData}/>
    <div className="text-red-800 font-bold">
      <button onClick={() => signOut(authInstance, dispatch)}>Logout</button>
    </div>
  </div>);
}

function ForecastDisplayer ({forecastData}) {
  return !forecastData? null :
  (<div className="container flex mx-3 my-2 bg-yellow-400 outline outline-1 rounded-md">
    <Icons icon="cloud" width={128} height={128}/>
    <div>
      <p>{`${toCelcius(forecastData.main.temp).toFixed(0)} °C`}</p>
      <p>{forecastData.name}</p>
      <span className='flex'>
        <p>{`${toCelcius(forecastData.main.temp_max).toFixed(0)}°`}</p>
        <p>{`${toCelcius(forecastData.main.temp_min).toFixed(0)}°`}</p>
      </span>
    </div>
  </div>);
}

async function signOut(authInstance, dispatch) {
  await authInstance.signOut();    
  dispatch(logOut());
}

function toCelcius(temperatureKevin) {
  return temperatureKevin - 273.15;
}

async function reqWeatherForecast(setForecastData) {
  const res = new Promise((resolve, reject) => { setTimeout(() => {
    navigator.geolocation.getCurrentPosition(
      async pos => resolve(await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${config.weatherApiKey}`)),
      error => reject(error)
    );}, 2000);
  });
  console.log((await res).data);
  setForecastData((await res).data);
}