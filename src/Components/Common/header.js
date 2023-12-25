import React  from "react";
import logo from '../../imgs/CINEMA-PARADISO.png'
import search from '../../imgs/Path 61.png'
import iceage2 from '../../imgs/iceage.png'
import blueimag from '../../imgs/blue.png'
import { Link } from "react-router-dom";

import '../../App.css';

function Header(){
  
    return(
        <div class="main-image">
        <header>
        
          <img className= {"logo"} src= {logo} alt="" />
          
          <div className="side-head">
            <div className="search">
              <input type="text" />
              <img className="icon-search" src={search} alt="" />
            </div>
            <div className="option">
              <Link to='/category'>Categories</Link>
              <Link to='/favorite'>Wishlist</Link>
            </div>
          </div>
        </header>
        <div className="ice-age">
        <div className="ice-age-div">
        <div className="Watch">
          <h1>ICE AGE</h1>
          <p>
            With globale warning threatenin their <br/> once-city domain with
            widespread flooding, <br/> Manny (RAY Romano) Sid (John Alberto <br/> Leguizamo)
            and Diego (Denis Leary) <br/> set out to find a safe haven. Along the way,<br/>
            another mamoth (Queen Latifah), <br/> who thinks she is an opssum, <br/> joins
            the travellers on their perilous quest.
          </p>
          <div>
            <a href="https://youtu.be/WfTqNyp5G54?si=WtTaDwWSqI-93-g-"><button className="watch-now">Watch Now</button></a>
          </div>
          </div>
          <div className="ice-age-img">
            <img style={{width: "100%"}} src={iceage2}alt="" />
          </div>
        </div>
        <img src={blueimag} alt="" id="blue-shadow"/>
      </div>
    </div>
    )
}


export default Header; 

