import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Welcome to Auth App</h2>
    <Link to="/login" className="btn btn-primary me-2">Login</Link>
    <Link to="/register" className="btn btn-success">Register</Link>
  </div>
);

export default Home;
