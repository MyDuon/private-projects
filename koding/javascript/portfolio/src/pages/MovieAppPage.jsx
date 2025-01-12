import Header from "../components/Header/Header";
import "./MovieAppPage.css";
import React, { useState, useEffect } from "react";
function MovieAppPage() {
  const [movieList, setMovieList] = useState([]);

  const handleOnclick = (title) => {
    console.log(title);
    // window.open("/");
  };

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWQyYmQxYzk5YmM4Yzg0ZTJmMjM4NzhjZmFiNjU0NyIsIm5iZiI6MTcyNjc0NzYxOC42ODA1NTMsInN1YiI6IjY2ZTc0ODg5ZDdiY2NhNTI0ZGIwYzY1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6FHx_AQ1_59HIkkErU6cEZctLOc6NVmjZpL4fYy5W50",
      },
    })
      .then((response) => response.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Header />
      <h1>Streaming</h1>
      <div className="content-wrapper">
        <h2>Top rated movies</h2>
        <div className="movie-wrapper">
          {movieList.map((movie) => (
            <div className="movie-child" key={movie.id}>
              <img
                onClick={() => handleOnclick(movie.id)}
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default MovieAppPage;
