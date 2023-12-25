import React from "react";
import { getMovies } from "../redux/movies/selector";
import { useSelector } from "react-redux";

function Category() {
    const movies = useSelector(getMovies)
    const renderMoviesByCategory = Category =>{
        const filteredMovies = movies.filter(
            movie => movie.category_id === Category
        )
        return(
            <div className="movies-section">
                {filteredMovies && filteredMovies.map((movie, index)=>(
                    <div className="movie_card" key={index}>
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
                )
                )}
            </div>
        )
    }

    return (
        <main>
            <h1>Categories</h1>
            <h2>Action</h2>
            {renderMoviesByCategory(1)}
            <h2>Drama</h2>
            {renderMoviesByCategory(5)}
            <h2>Horror</h2>
            {renderMoviesByCategory(7)}
            <h2>Thriller</h2>
            {renderMoviesByCategory(8)}
            <h2>Romantic</h2>
            {renderMoviesByCategory(6)}

        </main>
    )

}

export default Category;
