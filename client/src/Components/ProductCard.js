import React from "react";
import "../Components/ProductCard.css";
import { Link } from "react-router-dom";
import { DASHBOARD, LOGIN } from "../Routes/Routes";

import { useAuth } from "../Context/auth";

const ProductCard = ({ name, price, imageUrl, bio, buttonSec }) => {
  const [auth, setAuth] = useAuth();
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">{price}</p>
        <p className="product-price bio">{bio}</p>
        {!auth.user ? (
          <>
            <Link to={LOGIN}>
              <button className="buy-button">{buttonSec}</button>
            </Link>
          </>
        ) : (
          <>
            <Link to={DASHBOARD}>
              <button className="buy-button">{buttonSec}</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
