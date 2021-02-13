import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import Product from './Views/Product';

function App() {
  const openSidebar = () => {
      document.querySelector(".sidebar").classList.add('open');
  }
  const closeSidebar = () => {
      document.querySelector(".sidebar").classList.remove('open');
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button id="sidebar" onClick={openSidebar}>
                    &#9776;
                </button>
                <Link to="/">
                ONE-STOP
                </Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="sign-in.html">Sign In</a>
            </div>
        </header>
        <aside className="sidebar">
            <div className="sidebar-header">
                <h1>Categories</h1>
                <button className="sidebar-close-button" onClick={closeSidebar}>&#10005;</button>
            </div>
            <ul>
                <li><a>Men</a></li>
                <li><a>Women</a></li>
            </ul>
        </aside>
        <main className="main">
            <div className="contents">
              <Route path="/product/:id" component={Product} />
              <Route exact={true} path="/" component={Home} />
            </div>
        </main>
        <footer class="footer">
            All rights reserved :)
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
