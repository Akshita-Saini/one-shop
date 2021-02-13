import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="grid-container">
        <header className="header">
            <div className="brand">
                <button id="sidebar" onclick="openSidebar()">
                    &#9776;
                </button>
                <a href="index.html">
                    ONE-STOP
                </a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="sign-in.html">Sign In</a>
            </div>
        </header>
        <aside className="sidebar">
            <div className="sidebar-header">
                <h1>Categories</h1>
                <button className="sidebar-close-button" onclick="closeSidebar()">&#10005;</button>
            </div>
            <ul>
                <li><a>Men</a></li>
                <li><a>Women</a></li>
            </ul>
        </aside>
        <main className="main">
            <div className="contents">
                <ul className="products">
                    <li>
                        <div className="product">
                            <img src="/images/1.jpg" className="product-image"/>
                            <div className="product-name">Plazzo Pants</div>
                            <div className="product-brand">Gucci</div>
                            <div className="product-price">1000</div>
                            <div className="product-rating">5(10 reviews)</div>
                        </div>
                    </li>
                    <li>
                       <div className="product">
                            <img src="/images/1.jpg" className="product-image"/>
                            <div className="product-name">Plazzo Pants</div>
                            <div className="product-brand">Gucci</div>
                            <div className="product-price">1000</div>
                            <div className="product-rating">5(10 reviews)</div>
                        </div>
                    </li>
                    <li>
                       <div className="product">
                            <img src="/images/1.jpg" className="product-image"/>
                            <div className="product-name">Plazzo Pants</div>
                            <div className="product-brand">Gucci</div>
                            <div className="product-price">1000</div>
                            <div className="product-rating">5(10 reviews)</div>
                        </div>
                    </li>
                    <li>
                       <div className="product">
                            <img src="/images/1.jpg" className="product-image"/>
                            <div className="product-name">Plazzo Pants</div>
                            <div className="product-brand">Gucci</div>
                            <div className="product-price">1000</div>
                            <div className="product-rating">5(10 reviews)</div>
                        </div>
                    </li>
                    <li>
                       <div className="product">
                            <img src="/images/1.jpg" className="product-image"/>
                            <div className="product-name">Plazzo Pants</div>
                            <div className="product-brand">Gucci</div>
                            <div className="product-price">1000</div>
                            <div className="product-rating">5(10 reviews)</div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
        <footer class="footer">
            All rights reserved :)
        </footer>
    </div>
  );
}

export default App;
