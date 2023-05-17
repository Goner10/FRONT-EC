import React, { useContext, useEffect } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';
import { ProductsContext } from '../../context/ProductsContext/ProductsState';
import { Badge } from 'antd';

function Header() {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);

  useEffect(()=>{
localStorage.setItem("cart", JSON.stringify(cart))
  },[cart])


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
                  Clothes
                </Link>
              </li>
              <li className="header-item">
                <Link to="/bio" className="nav-link">
                  Bio
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right-menu-container">
          <nav className="header-nav">
            <ul className="header-list menu-container">
              {!token ? (
                <li className="header-item">
                  <Link to="/login" className="nav-link">
                    👽
                  </Link>
                </li>
              ) : (
                <>
                  <li className="header-item">
                    <Link to="/profile" className="nav-link">
                    👽
                    </Link>
                  </li>
                  <li className="header-item">
                    <Link to="/bag" className="nav-link">
                    <Badge count={cart.length}>
                    🛒
                    </Badge>
                    </Link>
                  </li>
                  <li className="header-item"onClick={logout}>
                    <Link to="/" className="nav-link">
                    🚩
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
