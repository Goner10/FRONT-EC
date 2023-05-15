import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
 
function Header() {
 
  return (
    <header className="header">
      <div className="header-container">
        <div className="left-menu-container">
          <nav className="header-nav">
            <ul className="header-list menu-container">
              <li className="header-item">
               
                <Link to="/" className="nav-link logo-link">
                  <h2>람들</h2>
                </Link>
              </li>
              <li className="header-item">
                <Link to="/ropa" className="nav-link">
                  Ropa
                </Link>
              </li>
              <li className="header-item">
                <Link to="/zapatillas" className="nav-link">
                  Zapatillas
                </Link>
              </li>
              <li className="header-item">
                <Link to="/accesorios" className="nav-link">
                  Accesorios
                </Link>
              </li>
           
            </ul>
          </nav>
        </div>
        <div className="right-menu-container">
          <nav className="header-nav">
            <ul className="header-list menu-container">
              <li className="header-item">
                <Link to="/login" className="nav-link">
                  👽
                </Link>
              </li>
              <li className="header-item">
                <Link to="/bag" className="nav-link">
                  👜
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
