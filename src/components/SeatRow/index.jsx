import React, {useEffect, useState} from 'react';
import {Seat} from "../Seat";

export const SeatRow = ({row, rowSelectedSeat, onSeatSelected}) => {

    console.log('from picker', rowSelectedSeat );

    return (
        <>
            <div className="seat-row">
                {
                    row.map((oneSeat) => (
                        <Seat number={oneSeat.number}
                              key={oneSeat.number}
                              isOccupied={oneSeat.isOccupied}
                              isSelected={rowSelectedSeat === oneSeat.number}
                              onSelect={onSeatSelected}
                        />
                    ))
                }
            </div>
        </>
    );
};