import React from "react";
import "../styles/ItemCard.css";
import { Link } from "react-router-dom";
import API from "../utils/api";

const ItemCard = ({ item, id, setShoesIds, shoesIds }) => {
  const handleRemoveShoe = () => {
    API.removeShoes(id).finally((data) =>
      setShoesIds(shoesIds.filter((itemId) => id !== itemId))
    );
  };

  return (
    <div className="card">
      <img className="card-img" src={item.imgUrl} alt="" />
      <div className="bottom-card">
        <h2>{item.description}</h2>
        <h3>Price: ${item.price}</h3>
        <div className="card-buttons-container">
          <Link to={`/edit-shoes/${id}`}>
          <button className="button-54 smaller-btn edit-btn">Edit</button>
          </Link>
          <button
            onClick={handleRemoveShoe}
            className="button-54 smaller-btn remove-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
