import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    const number = 56;
    const increaseCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h3>Count: {count}</h3>
            <h4>my number: {number}</h4>
            <h3>Count: {count}</h3>
            <p><small>Double count: {count * 2}</small></p>
            <button onClick={increaseCount}>Click Me</button>
        </div>
    );
};

export default Home;