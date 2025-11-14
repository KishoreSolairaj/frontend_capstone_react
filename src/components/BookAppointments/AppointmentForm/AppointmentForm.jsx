import React, { useState } from 'react';

const AppointmentForm = ({ doctorName, onCancel }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Save the form data to local storage
        const appointmentData = { name, phoneNumber, date, time };
        localStorage.setItem(doctorName, JSON.stringify(appointmentData));
        // Clear the form fields
        setName('');
        setPhoneNumber('');
        setDate('');
        setTime('');
    };
    const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

    return (

       <>
        <h1>Book Your Appointment at Your Own Need</h1>
        <form onSubmit={handleFormSubmit}>
        <h3>Book Appointment</h3>
        <div>
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </div>
        <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            />
        </div>
        <div>
            <label htmlFor="date">Date of Appointment:</label>
            <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            />
        </div>
   
        <div>
            <label htmlFor="time">Choose Slot:</label>
            {/* <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            /> */}
              <div>
        <button
          onClick={() => handleSlotSelection('Slot 1')}
          disabled={selectedSlot === 'Slot 1'}
        >
          Slot 1
        </button>
        <button
          onClick={() => handleSlotSelection('Slot 2')}
          disabled={selectedSlot === 'Slot 2'}
        >
          Slot 2
        </button>
        <button
          onClick={() => handleSlotSelection('Slot 3')}
          disabled={selectedSlot === 'Slot 3'}
        >
          Slot 3
        </button>
        <button
          onClick={() => handleSlotSelection('Slot 4')}
          disabled={selectedSlot === 'Slot 4'}
        >
          Slot 4
        </button>
      </div>
        </div>
        <div>
            <button type="submit">Book Now</button>
            <button type="button" onClick={onCancel}>
            Cancel
            </button>
        </div>
        </form>
        </>
    );
};

export default AppointmentForm;
