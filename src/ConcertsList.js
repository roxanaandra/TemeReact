import React from 'react';
import ConcertsItem from './ConcertsItem';

const ConcertsList = () => {


    return (
        <>
        <h2>Concerts</h2>
        <ConcertsItem name="A"/>
        <ConcertsItem name="B" />
        <ConcertsItem name="C" />
        </>
    )
}

export default ConcertsList;