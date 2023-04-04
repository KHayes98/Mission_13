import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Podcasts from "./pages/Podcasts";
import MovieCollection from "./pages/MovieCollection";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Joel Hilton
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/podcasts">
              Podcasts
            </Link>
            <Link className="nav-link" to="/movie-collection">
              Movie Collection
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/movie-collection" element={<MovieCollection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
