import React, {useEffect, useState} from 'react';

export const CityOptions = ({cities}) => {

    return (
        <>
            {
                cities.map((city) => (
                    <option value={city.code} key={city.code} >{city.name}</option>
                ))
            }
        </>
    );
};

