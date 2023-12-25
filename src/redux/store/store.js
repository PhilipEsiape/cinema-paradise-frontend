import { applyMiddleware, combineReducers, legacy_createStore as configureStore,compose } from "redux"; 
import {composeWithDevTools} from 'redux-devtools-extension';
//import {logger} from 'redux-logger'
import { thunk } from 'redux-thunk'
import { moviesReducer } from "../movies/reducers";
import { favoritesReducer } from "../favorites/reducer";

// const rootReducer = combineReducers({
//     movies: moviesReducer,
//     favorites: favoritesReducer
// });

// export default function configureStores(preloadedState){
//     const middlewares = [logger, thunk];
//     const middlewareEnchancer = applyMiddleware(...middlewares);
//     const enhancers = [middlewareEnchancer];
//     const composedEnhancers = composeWithDevTools(...enhancers);
//     const store = configureStore(rootReducer, preloadedState, composedEnhancers);
//     return store;
// }

export default function createStore(){
    return configureStore(
        combineReducers({
            movies: moviesReducer,
            favorites: favoritesReducer
        }),
        
            composeWithDevTools(applyMiddleware(thunk))
            //window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
        
    );
}