import React, {useEffect, useState} from 'react';

export const DatesOptions = ({dates}) => {

    return (
        <>
            {
                dates.map((date) => (
                    <option value={date.dateBasic} key={date.dateBasic} >{date.dateCs}</option>
                ))
            }
        </>
    );
};

