import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {JourneyPicker} from '../JourneyPicker';
import {BusStop} from "../BusStop";
import './style.css';


export const JourneyDetail = ({journey}) => {

    const stopList = journey.stops;

    return (
        <>
            <main>
                <div className="journey-detail container">
                    <h2>Podrobnosti cesty č. {journey.journeyId} </h2>
                    <div className="stops">
                        {
                            stopList.map(
                                (oneStop) => (
                                    <BusStop stop={oneStop} key={oneStop.code}/>
                                ))
                        }
                    </div>
                </div>

            </main>
        </>
    );
};
