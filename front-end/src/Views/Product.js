import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function Product(props){
    console.log(props.match.params.id);
    const product = data.products.find( x => x.id===props.match.params.id);
    return <div>
        <div>
            <Link to="/">Back to Home</Link>
        </div>
        <div className="details">
           <div className="details-image">
                <img src={product.image} alt={product.name}/>
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
                        {product.rating} stars ({product.numOfReviews} reviews)
                    </li>
                    <li>
                        {product.price}
                    </li>
                    <li>
                        {product.description}
                    </li>
                </ul>
           </div>
        </div>
    </div>;
}
export default Product;