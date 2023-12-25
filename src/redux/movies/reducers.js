import * as Actions from './actions'
import initialState from '../store/initialState'

//Normal JavaScript

export function moviesReducer(state = initialState.movies, action){
    if (action.type === Actions.FETCH_MOVIES){
        return{
            ...state,
            results: action.payload.movies,
        }
    }else{
        return state;
    }
}