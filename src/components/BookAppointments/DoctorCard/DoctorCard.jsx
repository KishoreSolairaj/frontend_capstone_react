import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCard.css';
// import uuid4
import { v4 as uuidv4 } from 'uuid';

// AppointmentForm component
const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
  
        const [selectedSlot, setSelectedSlot] = useState(null);
      
        const handleSlotSelection = (slot) => {
          setSelectedSlot(slot);
        };
    // const handleSlotSelection = (slot,i) => {
    //     console.log(slot);
    //     console.log(setSelectedSlot(slot));
    //   setSelectedSlot(slot);
    //  document.getElementById(`btnslot${i}`).style.backgroundColor='green'
    // };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber, date, time });
        // Clear the form fields
        setName('');
        setPhoneNumber('');
        setDate('');
        setTime('');
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date of Appointment:</label>
                <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="time">Book Time Slot:</label>
                <select
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                >
                  <option value="">Select a time slot</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  {/* Add more options for different time slots */}
                </select>
                {/* <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                /> */}
            {/* <input type="submit"
              value="Slot 1" disabled      
              onClick={(e) => {
                e.preventDefault();
                handleSlotSelection('Slot 1');
              }}
            />
        <input className='btnslot'
          type="submit"
          value="Slot 2"
          disabled={selectedSlot === 'Slot 2'}
          onClick={(e) => {
            e.preventDefault();
            handleSlotSelection('Slot 2');
          }}
        />
        <input className='btnslot'
          type="submit"
          value="Slot 3"
          disabled={selectedSlot === 'Slot 3'}
          onClick={(e) => {
            e.preventDefault();
            handleSlotSelection('Slot 3');
          }}
        />
        <input className='btnslot'
          type="submit"
          value="Slot 4"
          disabled={selectedSlot === 'Slot 4'}
          onClick={(e) => {
            e.preventDefault();
            handleSlotSelection('Slot 4');
          }}
        /> */}
            </div>
            <button type="submit">Book Now</button>
            </form>

    );
};

const DoctorCard = ({ name, speciality, experience, location, clinic, consultationFees, profilePic }) => {
  const [showModal, setShowModal] = useState(false);
  // const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);
  // const [appointmentData, setAppointmentData] = useState(null);

  const [appointments, setAppointments] = useState([]);

  // Check if appointment data exists in localStorage
  useEffect(() => {
    // const storedData = localStorage.getItem(name);
    // if (storedData) {
    //   setIsAppointmentBooked(true);
    //   setAppointmentData(JSON.parse(storedData));
    // }
    const storedAppointments = JSON.parse(localStorage.getItem(name));
    if (storedAppointments) {
      setAppointments(storedAppointments);
    }
  }, [name]);
    const handleBooking = () => {
        setShowModal(true);
    };

    // const handleCancel = () => {
    //     localStorage.removeItem(name);
    //     setIsAppointmentBooked(false);
    //     setAppointmentData(null);
    // };
    const handleCancel = (appointmentId) => {
      const updatedAppointments = appointments.filter(appointment => appointment.id !== appointmentId);
      setAppointments(updatedAppointments);
      localStorage.setItem(name, JSON.stringify(updatedAppointments));
      // remove item from localStorage
      if (updatedAppointments.length === 0) {
        localStorage.removeItem(name);
        localStorage.removeItem("doctorData");
      }
      console.log("cancel clicked");
      window.location.reload();
    };

    const handleFormSubmit = (appointmentData) => {
      const newAppointment = {
        id: uuidv4(),
        ...appointmentData
      };
      const doctorData = {
        name: name,
        speciality: speciality,
      };
      localStorage.setItem('doctorData', JSON.stringify(doctorData));
      const updatedAppointments = [...appointments, newAppointment];
      setAppointments(updatedAppointments);
      localStorage.setItem(name, JSON.stringify(updatedAppointments));
      setShowModal(false);
      window.location.reload();
      
    };
    // const handleFormSubmit = (appointmentData) => {
        // const doctorData = {
        //   name: name,
        //   speciality: speciality,
        // };
    //     localStorage.setItem('doctorData', JSON.stringify(doctorData));
    //     localStorage.setItem(name, JSON.stringify(appointmentData));
    //     setIsAppointmentBooked(true);
    //     setShowModal(false);
    //     setAppointmentData(appointmentData);
    //     window.location.reload();
    //   };

    return (
        
        <div className="doctor-card-container">
          <div className="doctor-card-details-container">
            <div className="doctor-card-profile-image-container">
              <img src={profilePic} alt={name} />
            </div>
            <div className="doctor-card-details">
              <div className="doctor-card-detail-name">{name}</div>
              <div className="doctor-card-detail-speciality">{speciality}</div>
              <div className="doctor-card-detail-experience">{experience} years experience overall</div>
              {/* <div className="doctor-card-detail-location">{location}</div> */}
              <div className="doctor-card-detail-clinic">Stay healthy</div>
              <div className="doctor-card-detail-consultationfees">Ratings: {consultationFees}</div>
            </div>
          </div>
          <div className="doctor-card-options-container">
            <Popup
              style={{ backgroundColor: '#FFFFFF' }}
              trigger={
                <button className={`book-appointment-btn ${appointments.length > 0 ? 'cancel-appointment' : ''}`}>
                  {appointments.length > 0 ? (
                    <div>Cancel Appointment</div>
                  ) : (
                    <div>Book Appointment</div>
                  )}
                  <div>No Booking Fee</div>
                </button>
              }
              modal
              open={showModal}
              onClose={() => setShowModal(false)}
            >
              {(close) => (
                <div className="doctorbg" style={{ height: '100vh', overflow: 'scroll' }}>
                  <div>
                    <div className="doctor-card-profile-image-container">
                      <img src={profilePic} alt={name} />
                    </div>
                    <div className="doctor-card-details">
                      <div className="doctor-card-detail-name">{name}</div>
                      <div className="doctor-card-detail-speciality">{speciality}</div>
                      <div className="doctor-card-detail-experience">{experience} years experience overall</div>
                      <div className="doctor-card-detail-location">{location}</div>
                      <div className="doctor-card-detail-clinic">{clinic}</div>
                      <div className="doctor-card-detail-consultationfees">Ratings: {consultationFees}</div>
                    </div>
                  </div>
                  
                  {appointments.length > 0 ? (
                    <>
                      <h3 style={{ textAlign: 'center' }}>Appointment Booked!</h3>
                      {appointments.map(appointment => (
                        <div key={appointment.id}>
                          <p>Name: {appointment.name}</p>
                          <p>Phone Number: {appointment.phoneNumber}</p>
                          <p>Date of Appointment: {appointment.date}</p>
                          <p>Time Slot: {appointment.time}</p>
                          <button onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
                        </div>
                      ))}
                    </>
                  ) : (
                    <AppointmentForm doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />
                  )}
                </div>
              )}
            </Popup>

          </div>
        </div>
    );
};

export default DoctorCard;
