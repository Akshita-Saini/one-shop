import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function Product(props){
    console.log(props.match.params.id);
    const product = data.products.find( x => x.id===props.match.params.id);
    return <div>
        <div className="back-to-home">
            <Link to="/"><span style={{fontSize:"larger", fontWeight:"bold"}}>&#x2B05; </span>Back to Home</Link>
        </div>
        <div className="details">
           <div className="details-image">
                <img src={'/'+product.image} alt={product.name}/>
           </div>
           <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.brand}
                    </li>
                    <li>
                        {product.rating} stars ({product.noOfReviews} reviews)
                    </li>
                    <li>
                        {product.description}
                    </li>
                </ul>
           </div>
           <div className="details-action">
                <ul>
                    <li>
                        Price: 	&#8377;{product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qty: 
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option> 
                        </select>
                    </li>
                    <li>
                        <button>Add to Cart</button>
                    </li>
                </ul>
           </div>
        </div>
    </div>;
}
export default Product;