import React from "react";
import '../Components/ProductCard.css'
import { Link } from "react-router-dom";
import { LOGIN } from "../Routes/Routes";

const ProductCard = ({ name, price, imageUrl, bio, buttonSec }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">{price}</p>
        <p className="product-price bio">{bio}</p>
        <Link to={LOGIN}>
        <button className="buy-button">{buttonSec}</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
