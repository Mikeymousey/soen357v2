import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import './notifications.css';

function Notifications() {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <h1 className='medication-title'>Notification Calendar</h1>
            <div className='medisafe__calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className='medisafe__text-center'>
                <span className='text-bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
        </div>
    )
}

export default Notifications;