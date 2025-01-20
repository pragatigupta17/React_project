import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
 <header>
         <nav>
            <h1>BAKERY</h1>            
            <ul>                 
                <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link></li>
                 <li><Link to="/contact">Contact</Link></li>
                 <li><Link to="/table">Data</Link></li>
                 <li><Link to="/signup">Signup</Link></li>
                 <li><Link to="/loging">Login</Link></li>
             </ul>
        </nav>
        
<div className="navbar-hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </header>
    </>
  );
};




const Foot =()=>{
    return(
        <>
        <section className="footer">
                <div className="box-contain">
                    <div className="bx">
                        <h3>address</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam</p>
                        <h3>social handel</h3>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>

                        </div>
                    </div>
                    <div className="bx">
                        <h3>E-mail</h3>
                        <a href="#" className="link">nivchgyd078@gmail.com</a>
                        <a href="#" className="link">cfdghghd45@gmail.com</a>
                        <a href="#" className="link">rdfcgvghj879@gmail.com</a>
                    </div>
                    <div className="bx">
                        <h3>call us</h3>
                        <p>+913456789765</p>
                        <p>+913214566667</p>
                        <p>+913456789765</p>
                    </div>
                    <div className="bx">
                        <h3>opening hours</h3>
                        <p>Monday - friday 09:00 - 23:00 <br/>Saturday-sunday 08:00 - 24:00</p>
                    </div>
                </div>
                <div className="credit">created by<span>Pragati Gupta</span> all rights reserved!..</div>
              </section>

        </>
    )
}


export  {Navbar,Foot}