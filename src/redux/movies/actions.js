export const FETCH_MOVIES ='FETCH_MOVIES' 

export function fetchMoviesAction(movies){
    return {
        type : 'FETCH_MOVIES',
        payload:{movies}
    }
}