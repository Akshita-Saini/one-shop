import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


function Home(props){

    const [products, setProduct] = useState([]);
    useEffect( () => {
      const fetchData = async () => {
        const {data} = await axios.get("/api/products");
        setProduct(data);
      };
      console.log("fetching data from the server!");
      fetchData();
      return () => {};
    }, []
    )

    return <ul className="products">
    {
      products.map( product => 
        <li key={product.id}>
          <div className="product">
            <Link to={'/product/'+product.id}>
               <img src={product.image} className="product-image"/>        
            </Link>
            <div className="product-name">
                <Link to={'/product/'+product.id}>
                    {product.name}
                </Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">	&#8377;{product.price}</div>
            <div className="product-rating">{product.rating} stars ({product.numOfReviews} reviews)</div>
          </div>
        </li> 
      )
    }
  </ul>;
}
export default Home;
