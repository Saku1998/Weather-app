import React from "react";
import {FiSearch} from 'react-icons/fi';
import {TiWeatherSunny, TiWeatherNight, TiWeatherWindy, TiWeatherCloudy, } from 'react-icons/ti';
import {CiTempHigh} from 'react-icons/ci'

type todaystateTypeProps = {
    todaystate:{
        cloudcover : number,
        pressure : number,
        sunrise : string,
        sunset : string,
        windspeed: number,
        temp: number
        day: string;
    },
    place: string;
    chooseCity: () => void;
    city: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Weather({todaystate, place, chooseCity, city, handleChange}: todaystateTypeProps){
    return (
        <>
          <div className='navbar'>
            <h3>WeatherChecker</h3>
            <div className='navbar-search'>
              <input placeholder='Enter your city' value={city} onChange={handleChange}></input>
              <div onClick={chooseCity}><FiSearch/></div>
            </div>
          </div>
          <div className="weather-today">
            <div className='weather-today-up'>
              <div className="weather-today-item">
                <TiWeatherCloudy className='icon'/>
                <h2>{todaystate.cloudcover}%</h2>
              </div>
              <div className="weather-today-item">
                <h2>{todaystate.pressure} hPa</h2>
              </div>
              <div className="weather-today-item">
                <TiWeatherWindy className='icon'/>
                <h2>{todaystate.windspeed}km/h</h2>
              </div>
            </div>
            <h1 className='city'>{place}</h1>
            <div className='weather-today-down'>
              <div>
              <div className="weather-today-item">
                <TiWeatherSunny className='icon'/>
                <h2>{todaystate.sunrise && todaystate.sunrise.slice(0,5)}</h2>
              </div>
              <div className="weather-today-item">
                <TiWeatherNight className='icon'/>
                <h2>{todaystate.sunset && todaystate.sunset.slice(0,5)}</h2>
              </div>
              </div>
              <div className="weather-today-item">
                <h2>{todaystate.day}</h2>
              </div>
              <div className="weather-today-item">
                <CiTempHigh className='icon'/>
                <h2>{todaystate.temp}°C</h2>
              </div>
            </div>
          </div>
        </>
    )
}