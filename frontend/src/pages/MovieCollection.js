import React from "react";
import movieData from "../assets/MovieData.json";

const MovieCollection = () => {
  return (
    <div>
      <h1 className="text-center">Movie Collection</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {movieData.MovieData.map((movie, index) => (
            <tr key={index}>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieCollection;
