
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-heading mt-4 mb-4">TV Shows List</h1>
      <div className="row">
        {shows.map((show) => (
          <div key={show.show.id} className={`col-md-4 mb-4 home-card`}>
            <img src={show.show.image?.medium} alt={show.show.name} className="card-img-top" />
            <div className="home-card-body">
              <div>
                <h5 className="home-card-title">{show.show.name}</h5>
                <h6 className={`home-card-subtitle text-muted`}>{show.show.premiered}</h6>
              </div>
              <Link to={`/show/${show.show.id}`} className="home-button-link">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
