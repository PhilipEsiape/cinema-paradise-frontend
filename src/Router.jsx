import {Route, Routes} from 'react-router-dom';
import Category from './containers/Category';
import Favorite from './containers/Favorite';
import Home from './containers/Home';
import React from 'react';

function Router(){
    return(
        <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path="/favorite" element={<Favorite/>} />
        </Routes>
    )
}

export default Router;