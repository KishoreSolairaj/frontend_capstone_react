import React from 'react';
import './AppointmentCard.css';

const AppointmentCard = ({ doctorName, appointmentData }) => {
  return (
    <div className="appointment-card">
      <div className="appointment-card__content">
        <h3 className="appointment-card__title">Appointment Details</h3>
        <p className="appointment-card__message">
          <strong>Doctor:</strong> {doctorName}
        </p>
        <p className="appointment-card__message">
          <strong>Name:</strong> {appointmentData.name}
        </p>
        <p className="appointment-card__message">
          <strong>Phone Number:</strong> {appointmentData.phoneNumber}
        </p>
        <p className="appointment-card__message">
          <strong>Date of Appointment:</strong> {appointmentData.date}
        </p>
        <p className="appointment-card__message">
          <strong>Time Slot:</strong> {appointmentData.time}
        </p>
      </div>
    </div>
  );
};

export default AppointmentCard;