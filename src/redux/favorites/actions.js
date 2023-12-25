export const ADD_FAVORITES = 'ADD_FAVORITES'

export function addFavoritesAction(favorites){
    return {
        type: ADD_FAVORITES,
        payload: favorites,
    }
}

export const FETCH_FAVORITES = 'FETCH_FAVORITES'

export function fetchFavoritesAction(favorites){
    return {
        type:FETCH_FAVORITES,
        payload: favorites,
    }
}

export const DELETE_FAVORITES = 'DELETE_FAVORITES'

export function DeleteFavoritesAction(favorites){
    return {
        type: DELETE_FAVORITES,
        payload: favorites,
    }
}
