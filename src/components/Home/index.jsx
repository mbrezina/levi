import React, {useState} from 'react';
import {createBrowserRouter, Link, RouterProvider, Outlet, useParams} from 'react-router-dom'
import {JourneyPicker} from '../JourneyPicker';
import {Footer} from "../Footer";
import {Header} from "../Header";


export const Home = () => {


    const [journey, setJourney] = useState(null);

    const handleJourneyChange = (journey) => {
        setJourney(journey);
        console.log(journey);
    }


    return (
        <>
            <main>
                <JourneyPicker onJourneyChange={handleJourneyChange}/>
                {journey !== null && <p>Nelezeno spojení s id {journey.journeyId}</p> }
            </main>
        </>
    );

};
