import React, {useState} from 'react';
import './App.css';
import CityInput from './components/CityInput';
import FutureDays from './components/FutureDays';
import Forecast from './components/Forecast';
import Weather from './components/Weather';

type todaystateType = {
  cloudcover : number,
  pressure : number,
  sunrise : string,
  sunset : string,
  windspeed: number,
  temp: number
  day: string;
}



function App() {

  const [showWeather, setShowWeather] = useState(false)
  const [info, setInfo] = useState([] as any)
  const [place, setPlace] = useState('')
  const [todaystate, setTodayState] = useState<todaystateType>({} as todaystateType)
  const [future, setFuture] = useState([])
  const [tfhours, setTfhours] = useState([])
  const [city, setCity] = useState("")

  function chooseCity(){
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=BSXRF6CBSRNQYPD28RRD2W8E7&contentType=json`, {
    "method": "GET",
    "headers": {
    }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setInfo(data)
      setPlace(data.address)
      setTodayState({
        cloudcover : data.currentConditions.cloudcover,
        pressure : data.currentConditions.pressure,
        sunrise : data.currentConditions.sunrise,
        sunset : data.currentConditions.sunset,
        windspeed: data.currentConditions.windspeed,
        temp: data.currentConditions.temp,
        day: data.days[0].datetime
      })
      setFuture(prev => {
        return data.days.map((day: any, index: number) =>{
          return {
            tempmax: day.tempmax,
            tempmin: day.tempmin,
            icon: day.icon,
            hours: day.hours,
            date: day.datetime,
            dayNumber: index
          }
        })
      })
      setTfhours(prev => {
        return data.days[0].hours.map((hour: any) => {
          return {
            icon: hour.icon,
            cloudcover: hour.cloudcover,
            datetime: hour.datetime,
            temp: hour.temp,
            windspped: hour.windspeed
          }
        })
      })
    })
    .catch(err => {
      console.error(err);
    });
    setShowWeather(true)
    setCity('')
}

  

  function cityState(e: React.ChangeEvent<HTMLInputElement>){
    setCity(e.target.value)
  }

  function changeDay(index: number){
      setTfhours(prev => {
        return info.days[index].hours.map((hour: any) => {
          return {
            icon: hour.icon,
            cloudcover: hour.cloudcover,
            datetime: hour.datetime,
            temp: hour.temp,
            windspped: hour.windspeed
          }
        })
      })
    }



  return (
    <div className="App">
      {showWeather 
        ?
        <div className='weather'>
          <Weather todaystate={todaystate} place={place} chooseCity = {chooseCity} city={city} handleChange={cityState}/>
          <FutureDays futureTime={future} changeHandler={changeDay} />
          <Forecast tfHours={tfhours}/>
        </div>
        :
        <CityInput handleClick={chooseCity} handleChange={cityState} city={city}/>
      }
    </div>
  );
}

export default App;
