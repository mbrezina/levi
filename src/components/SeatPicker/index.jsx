import React, {useEffect, useState} from 'react';
import './style.css';
import {SeatRow} from "../SeatRow";

export const SeatPicker = ({seats, selectedSeat, onSeatSelected}) => {

    console.log('selected seat from seat Picker', selectedSeat);

    return (
        <>
            <div className="seat-picker container">
                <h2>Vyberte sedadlo</h2>
                <div className="seats">
                    {
                        seats.map((oneRow) => (
                            <SeatRow row={oneRow}
                                     rowSelectedSeat={selectedSeat}
                                     onSeatSelected={onSeatSelected}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

