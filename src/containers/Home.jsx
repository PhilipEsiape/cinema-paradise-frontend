import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/movies/selector";
import { fetchMovies } from "../redux/movies/operations";
import Header from "../Components/Common/header";
import Footer from "../Components/Common/footer";
import { addFavourite, deleteFavourite } from "../redux/favorites/operations";
import { getFavorites } from "../redux/favorites/selector";
import heartIcon from "../imgs/hearticon.png";
import '../App.css'

function Home() {
  const selector = useSelector((state) => state);
  const movies = getMovies(selector);
  console.log(movies);
  const dispatch = useDispatch();
  const favorites = getFavorites(selector);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleFavoriteToggle = (movie) => {
    const isFavorite = favorites?.some((favMovie) => favMovie.id === movie.id);
    if (isFavorite) {
      dispatch(deleteFavourite(movie.id));
    } else {
      dispatch(addFavourite(movie));
    }
  };

  const renderMovieReleaseType = (releaseType) => {
    const filteredMovies = movies.filter(
      (movie) => movie.release_type === releaseType
    );

  return (
    <div className="movies-section">
      {filteredMovies &&
        filteredMovies.map((movie, index) => {
          const isFavorite = favorites?.includes(
            (favMovie) => favMovie.id === movie.id
          );
          return (
            <div className="movie_card" key={index}>
              <img className="Love" src={heartIcon} alt="" onClick={()=>handleFavoriteToggle(movie) }/>
              <div className="movie_img">
                <img src={movie.image} alt="movie-img" />
              </div>
              <div className="movie_name">
                <h1>{movie.title}</h1>
              </div>
              <div className="movie_des">TV-MA | ACTION, CRIME</div>
              <a
                target="_blank"
                href={movie.trailer_link}
                className="btn"
              >
                Watch Trailer
              </a>
            </div>
          );
        })}
    </div>
  );
    };
    return(
        <>
        <Header/>
        <main>
            <h1>______Newly Released______</h1>
            {renderMovieReleaseType('Newly Released')}
            <h1>______Upcoming Movies______</h1>
            {renderMovieReleaseType('Upcoming')}
        </main>
        <Footer/>
        </>
    )
}

export default Home;