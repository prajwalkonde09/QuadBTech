
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/summary.css';
import BookingForm from './BookingForm';

const MovieSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    // Fetch show details from API based on id
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  const handleBookTicket = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="summary-container">
      {show ? (
        <>
          <img src={show.image.original} alt={show.name} className="summary-img" />
          <div className="summary-content">
            <h1 className="summary-h1">{show.name}</h1>
            <p className="summary-p">{show.summary}</p>
          </div>
          <div className="summary-actions">
            <button onClick={handleBookTicket} className="summary-button">
              Book Ticket
            </button>
            <Link to="/" className="summary-link">
              Back to Home
            </Link>
            {showBookingForm && <BookingForm setShowBookingForm={setShowBookingForm} movieDetails={show} />}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieSummary;
