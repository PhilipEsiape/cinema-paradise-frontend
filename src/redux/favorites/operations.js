import API from "../../API";
import { addFavoritesAction, DeleteFavoritesAction, fetchFavoritesAction } from "./actions";

const api = new API();
const FAVOURITES_KEY = 'FAVOURITES_KEY'

export const fetchFromLocalStorage = () => {
    return async dispatch => {
        let favoritesJSON = localStorage.getItem(FAVOURITES_KEY);
        let favorites = [];
        if (favoritesJSON){
            favorites = JSON.parse(favoritesJSON)
            console.log(favorites)
            // parse() converts data from JSON to object
        }
        dispatch(fetchFavoritesAction(favorites))
    };
};

export const addFavourite = image => {
    return async (dispatch, getState) => {
        let prevFavourites = getState().favorites.lists
        const nextFavourites = [image, ...prevFavourites];
        setToLocalStorage(nextFavourites)
        dispatch(addFavoritesAction(nextFavourites))
    }
}


export const deleteFavourite = id => {
    return async (dispatch, getState) => {
        let prevFavourites = getState().favorites.lists
        const nextFavourites = prevFavourites.filter(image => image.id != id);
        setToLocalStorage(nextFavourites);
        dispatch(DeleteFavoritesAction(nextFavourites))
    };
};

const setToLocalStorage = favorites => {
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favorites))
}