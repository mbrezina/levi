import React, {useEffect, useState} from 'react';
import mapImage from './img/map.svg';
import './style.css';
import {CityOptions} from "../CityOptions";
import {DatesOptions} from "../DatesOptions";


export const JourneyPicker = ({onJourneyChange}) => {

    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [date, setDate] = useState('');
    const [cities, setCities] = useState([]);
    const [dates, setDates] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('odesílám formulář s cestou');
        console.log(fromCity);
        console.log(toCity);
        console.log(date);

        console.log(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`);

        fetch(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`)
            .then((response) => response.json())
            .then((data) => onJourneyChange(data.results))
    }

    useEffect(() => {
        fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
            .then((response) => response.json())
            .then((data) => setCities(data.results))
            .then(console.log(cities))
        //console.log(response.json());

    }, [])

    useEffect(() => {
        fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates')
            .then((response) => response.json())
            .then((data) => setDates(data.results))
            .then(console.log(dates))
        //console.log(response.json());

    }, [])

    return (
        <>
            <div className="journey-picker container">
                <h2 className="journey-picker__head">Kam chcete jet?</h2>
                <div className="journey-picker__body">
                    <form className="journey-picker__form">
                        <label>
                            <div className="journey-picker__label">Odkud:</div>
                            <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
                                <option>Vyberte</option>
                                <CityOptions cities={cities}/>
                            </select>
                        </label>
                        <label>
                            <div className="journey-picker__label">Kam:</div>
                            <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
                                <option value="">Vyberte</option>
                                <CityOptions cities={cities}/>
                            </select>
                        </label>
                        <label>
                            <div className="journey-picker__label">Datum:</div>
                            <select value={date} onChange={(e) => setDate(e.target.value)}>>
                                <option value="">Vyberte</option>
                                <DatesOptions dates={dates}/>
                            </select>
                        </label>
                        <div className="journey-picker__controls">
                            <button
                                className="btn"
                                type="submit"
                                onClick={handleSubmit}
                                disabled={(!(toCity !== '' && fromCity !== '' && date !== ''))}
                            >
                                Vyhledat spoj
                            </button>
                        </div>
                    </form>
                    <img className="journey-picker__map" src={mapImage}/>
                </div>
            </div>
        </>
    );
};

