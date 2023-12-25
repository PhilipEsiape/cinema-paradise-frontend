import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../redux/favorites/selector";
import { deleteFavourite, fetchFromLocalStorage } from "../redux/favorites/operations";
import heartIcon from "../imgs/hearticon.png";

function Favorite(){
    const selector = useSelector(state=> state)
    const favoriteMovies =getFavorites(selector)
    console.log({favoriteMovies});
    const dispatch = useDispatch()
    const deleteFavourites=id=>{
        dispatch(deleteFavourite(id))
    }
    useEffect(()=>{
        dispatch(fetchFromLocalStorage())
    },[dispatch])

    return(
        <>
        <h2>Favorites</h2>
        <div className="movies-section">
            {favoriteMovies.map((favoriteMovie, index)=>{
                return <div className="movie_card" key={index}>
                <img className="Love" src={heartIcon} alt="" onClick={()=>deleteFavourites(favoriteMovie.id) }/>
                <div className="movie_img">
                  <img src={favoriteMovie.image} alt="movie-img" />
                </div>
                <div className="movie_name">
                  <h1>{favoriteMovie.title}</h1>
                </div>
                <div className="movie_des">TV-MA | ACTION, CRIME</div>
                <a
                  target="_blank"
                  href={favoriteMovie.trailer_link}
                  className="btn"
                >
                  Watch Trailer
                </a>
              </div>
            })}

        </div>
        </>
    )
}

export default Favorite;