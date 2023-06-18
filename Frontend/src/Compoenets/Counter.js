import React, { useRef, useState } from 'react';
import "./../Assessts/Style.css";

function Counter({ onChange }) {
    const countRef = useRef(0);

    const handleIncrease = () => {
        const increaseCount = countRef.current += 1;
        onChange(increaseCount);
        console.log('Count:', countRef.current);
    };

    const handleDecrease = () => {
        if (countRef.current > 0) {
            const decreaseCount = countRef.current -= 1;
            onChange(decreaseCount);
            console.log('Count:', countRef.current);
        }

    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', border: '1px solid black', }}>


            <button style={{ width: '3rem', height: '4rem', borderRadius: '1rem 1rem' }} onClick={handleIncrease}> + </button>
            <p style={{ marginTop: '1.4rem' }}>{countRef.current}</p>
            <button style={{ width: '3rem', height: '4rem', borderRadius: '1rem 1rem' }} onClick={handleDecrease}> - </button>
        </div>
    );
}

export default Counter;
