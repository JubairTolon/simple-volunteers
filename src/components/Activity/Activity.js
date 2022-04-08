import React from 'react';
import './Activity.css'

const Activity = ({ activity }) => {
    const { title, picture } = activity;
    return (
        <div className='activity'>
            <h2>Title: {title}</h2>
            <img style={{ width: '200px' }} src={picture} alt="" />
        </div>
    );
};

export default Activity;