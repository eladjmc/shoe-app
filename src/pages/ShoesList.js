import React from "react";
import ItemCard from "../components/ItemCard";

const ShoesList = ({ shoesIds, shoes }) => {
  return (
    <>
      <div className="shoe-list">
        {shoesIds.map((id) => {
          return <ItemCard key={id} item={shoes[id]} />;
        })}
      </div>
    </>
  );
};

export default ShoesList;
