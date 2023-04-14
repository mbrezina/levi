import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {JourneyPicker} from '../JourneyPicker';
import {JourneyDetail} from "../JourneyDetail";
import {SeatPicker} from "../SeatPicker";
import './style.css';

export const Home = () => {

    const navigate = useNavigate();
    const [journey, setJourney] = useState(null);
    const [userSeat, setUserSeat] = useState(null);

    const handleJourneyChange = (journey) => {
        setJourney(journey);
        console.log('journey', journey);
    }

    const url = 'https://apps.kodim.cz/daweb/leviexpress/api/reservation';
    const handleBuy = () => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'create',
                seat: userSeat,
                journeyId: journey.journeyId,
            }),
        })
            .then((response) => response.json())
            .then((data) => navigate(`/reservation/${data.results.reservationId}`))
    }

    return (
        <>
            <main>
                <JourneyPicker onJourneyChange={handleJourneyChange}/>
                {journey !== null && <JourneyDetail journey={journey}/>}
                {journey !== null && <SeatPicker seats={journey.seats}
                                                 selectedSeat={userSeat}
                                                 journeyId={journey.journeyId}
                                                 onSeatSelected={setUserSeat} />}
                {journey !== null &&
                    <div className="container">
                        <div className="controls container">
                            <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
                        </div>
                    </div>}
            </main>
        </>
    );
};
