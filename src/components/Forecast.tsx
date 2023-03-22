import React from 'react'
import {TiWeatherWindy, TiWeatherCloudy} from 'react-icons/ti';
import {FaTemperatureHigh} from 'react-icons/fa'
type ForecastProps = {
    tfHours:{
        icon: string
        cloudcover: number
        datetime: string
        temp: number
        windspped: number
    }[]
}

export default function Forecast({tfHours}: ForecastProps){
    return (
        <div className='forecast'>
            <h1 className='forecast-title'>Forecast24H</h1>
            {tfHours.map(hour => {
                return <div className='forecast-hour'>
                            <h3>{hour.datetime && hour.datetime.slice(0,5)}</h3>
                            <div className='forecast-hour-part'>
                                <FaTemperatureHigh />
                                <h3>{hour.temp}°C</h3>
                            </div>
                            <div className='forecast-hour-part'>
                                <TiWeatherCloudy />
                                <h3>{hour.cloudcover}%</h3>
                            </div>
                            <div className='forecast-hour-part'>
                                <TiWeatherWindy />
                                <h3>{hour.windspped}km/h</h3>
                            </div>
                       </div>
            })}
        </div>
    )
}