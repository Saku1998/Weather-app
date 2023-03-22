import React, {useState} from 'react'
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'
import {FaTemperatureHigh, FaTemperatureLow} from 'react-icons/fa'
type futureProps = {
    futureTime: {
        tempmax: number;
        tempmin: number;
        icon: string;
        hours: {}[];
        date: string;
        dayNumber: number;
    }[],
    changeHandler: (index: number) => void
}

export default function FutureDays({futureTime, changeHandler}: futureProps){

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(4)

    function goRight(){
        if(end < 15){
            setEnd(prev => prev + 1)
            setStart(prev => prev + 1)
        }
    }

    function goLeft(){
        if(start > 0){
            setStart(prev => prev - 1)
            setEnd(prev => prev - 1)
        }
    }


    return (
        <div className='future-days'>
            <AiFillCaretLeft onClick={goLeft} className='future-icon'/>
            {futureTime.slice(start,end).map(time => {
                return  <div className='future-days-day' onClick={() => changeHandler(time.dayNumber)}>
                            <h3>{time.date}</h3>
                            <div className='future-days-temp'>
                                <div className='future-days-temp-maxmin'>
                                    <FaTemperatureHigh />
                                    <h3>{time.tempmax}</h3>
                                </div>
                                <div className='future-days-temp-maxmin'>
                                    <FaTemperatureLow />
                                    <h3>{time.tempmin}</h3>
                                </div>
                            </div>
                        </div>
            })}
            <AiFillCaretRight onClick={goRight} className='future-icon'/>
        </div>
    )
}