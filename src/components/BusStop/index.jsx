import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {JourneyPicker} from '../JourneyPicker';
import {Footer} from "../Footer";
import {Header} from "../Header";
import './style.css';


export const BusStop = ({stop}) => {

    return (
        <>
            <main>
                <div className="bus-stop">
                    <div className="bus-stop__bullet"></div>
                    <div className="bus-stop__place">
                        <div className="bus-stop__city">{stop.name}</div>
                        <div className="bus-stop__station">{stop.station}</div>
                    </div>
                    <div className="bus-stop__departure">{stop.time}</div>
                </div>
            </main>
        </>
    );
};
