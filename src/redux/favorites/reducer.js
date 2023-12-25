import * as Actions from './actions'
import initialState from '../store/initialState'

export function favoritesReducer(state= initialState.favorites, action){
    if (action.type === Actions.ADD_FAVORITES){
        return{
            ...state,
            lists : action.payload,
        }
    }else if(action.type === Actions.FETCH_FAVORITES){
        return {
            ...state,
            lists : action.payload,
        }
    }else if(action.type === Actions.DELETE_FAVORITES){
        return {
            ...state,
            lists : action.payload,
        }
    }else{
        return state;
    }
}
