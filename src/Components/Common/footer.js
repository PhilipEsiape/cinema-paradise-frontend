import React from "react";
import logo from '../../imgs/CINEMA-PARADISO.png'

//This is a component function


function Footer() {
    return(
        <footer class="footer">
            <img src={logo} alt="" />           
            <p>Cinema Paradiso is the world's leading community for creators to share, grow, and get hired</p><br/>
            <h2>Contact</h2><br/>
            <p>E-mail: movie@cinemaparadiso.com | HotLine :+ 1 131138138</p><br/>
          <hr />
            <p>CINEMA PARADISO - @ 2022. ALL RIGHTS RESERVED.</p>
         </footer>
    );
}


export default Footer;