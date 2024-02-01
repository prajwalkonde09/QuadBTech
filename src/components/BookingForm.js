
import React, { useState } from 'react';
import '../styles/bookingform.css';

const BookingForm = ({ setShowBookingForm, movieDetails }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    schedule: '',
    numberOfTickets: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // session storage used
    sessionStorage.setItem('userData', JSON.stringify(formData));
    // Hide the booking form after submission
    setShowBookingForm(false);
  };

  const formatSchedule = (schedule) => {
    if (!schedule || !schedule.time || !schedule.days) {
      return 'Schedule not available';
    }
    return `${schedule.days.join(', ')} at ${schedule.time}`;
  };

  return (
    <div className="booking-form-container">
      <h2 className="booking-form-heading">Book Tickets for <span style={{ color: 'red' }}>{movieDetails.name}</span></h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="booking-form-field">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="booking-form-field">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="booking-form-field">
          <label htmlFor="schedule">Schedule:</label>
          <input
            type="text"
            id="schedule"
            name="schedule"
            value={formatSchedule(movieDetails.schedule)}
            readOnly
          />
        </div>
        <div className="booking-form-field">
          <label htmlFor="numberOfTickets">Number of Tickets:</label>
          <input
            type="number"
            id="numberOfTickets"
            name="numberOfTickets"
            value={formData.numberOfTickets}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="booking-form-button">
          Book Ticket
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
