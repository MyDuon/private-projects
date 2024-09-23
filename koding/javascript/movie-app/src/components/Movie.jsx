import React, { useState, useEffect } from "react";

function Movie() {
  const [movieList, setMovieList] = useState([]);

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
      <div>
        {movieList.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
          //   <img
          //     onClick={console.log(1)}
          //     key={movie.id}
          //     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          //   />
        ))}
      </div>
    </>
  );
}
export default Movie;
