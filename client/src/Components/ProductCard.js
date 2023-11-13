import React from "react";
import '../Components/ProductCard.css'
import { Link } from "react-router-dom";

const ProductCard = ({ name, price, imageUrl, bio }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">₹ {price}</p>
        <p className="product-price bio">{bio}</p>
        <Link to='/contactus'>
        <button className="buy-button">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
