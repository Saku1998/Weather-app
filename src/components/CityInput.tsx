import React, {useState} from 'react'
import {FiSearch} from 'react-icons/fi';
type CityInputProps = {
    handleClick: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    city: string;
}


export default function CityInput({handleClick, handleChange, city}: CityInputProps){

    

    return (
        <div className='main-div'>
            <div className='main-div-ui'>
                <h1>WeatherChecker</h1>
                <div className='main-div-ui-search'>
                    <input className='cityInput' placeholder='Enter your city' value={city} onChange={handleChange}></input>
                    <div className='main-div-ui-inputs-btn' onClick={handleClick}><FiSearch className='search-icon'/></div>
                </div>
            </div>
        </div>
    )
}