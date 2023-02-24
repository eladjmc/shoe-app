import React from "react";
import ItemCard from "../components/ItemCard";

const ShoesList = ({ shoesIds, shoes, isLoading,setShoesIds }) => {
  return (
    <>
      {!isLoading && (
        <div className="shoe-list">
          {shoesIds.map((id) => {
            return (
              <ItemCard
                key={id}
                item={shoes[id]}
                id={id}
                shoesIds={shoesIds}
                setShoesIds={setShoesIds}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default ShoesList;
