import React from 'react';
import './Activity.css'

const Activity = ({ activity }) => {
    const { title, picture } = activity;
    return (
        <div className='activity'>
            <img style={{ width: '200px' }} src={picture} alt="" />
            <h2>Title: {title}</h2>
        </div>
    );
};

export default Activity;