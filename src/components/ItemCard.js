import React from "react";
import "../styles/ItemCard.css";
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
        <h3>price: ${item.price}</h3>
        <div className="card-buttons-container">
          <button className="button-54 smaller-btn edit-btn">Edit</button>
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
